import Container from 'components/Container';
import CountdownTimers from 'components/CountdownTimers';
import MyGoals from 'components/MyGoals';
import AddResult from 'components/AddResult/AddResult';
import {
  useDeleteTrainingMutation,
  useFetchTrainingQuery,
} from '../../redux/training/trainingApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Progress from 'components/Progress/Progress';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import getTrainingDaysAmount from 'helpers/getTrainingDaysAmount';
import { Chart } from 'components/Chart/Chart';
import calculateStatistics from 'services/calculateStatistics';
import { useState } from 'react';

const StatisticView = () => {
  const { data: userTraining, isLoading: isFetchingTraining } =
    useFetchTrainingQuery();

  const [deleteTraining, { isLoading }] = useDeleteTrainingMutation();

  const navigate = useNavigate();

  const [currentTraining, setCurrentTraining] = useState(null);

  useEffect(() => {
    if (!userTraining) {
      navigate('/training');
    } else {
      const { startDate, finishDate, books } = userTraining;
      const trainingDaysAmount = getTrainingDaysAmount(startDate, finishDate);
      const trainingPagesAmount =
        books.reduce((currentValue, book) => {
          return (currentValue += Number.parseInt(book.amountOfPages));
        }, 0) ?? 0;
      setCurrentTraining({
        ...userTraining,
        trainingDaysAmount,
        trainingPagesAmount,
        goalPerDay: Math.round(trainingPagesAmount / trainingDaysAmount),
        notFinishedBooksAmount: books.filter(book => book.status === 'finished')
          .length,
      });
    }
  }, [navigate, userTraining]);

  const handleChange = event => {
    alert('Меняем статус книги на Прочитано');
  };

  return isFetchingTraining ? (
    <Progress />
  ) : (
    currentTraining && (
      <>
        <Container>
          <CountdownTimers
            targetDate={new Date(userTraining.finishDate).getTime()}
          />
          <MyGoals
            bookAmount={currentTraining.books.length}
            daysAmount={currentTraining.trainingDaysAmount}
            booksLeft={currentTraining.notFinishedBooksAmount}
          />
        </Container>

        <Container>
          {/* Контрол с чек-боксом */}
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">
              Current training from {currentTraining.startDate} till{' '}
              {currentTraining.finishDate} ({currentTraining.trainingDaysAmount}{' '}
              days) Total pages in this training:{' '}
              {currentTraining.trainingPagesAmount} Your daily goal ={' '}
              {currentTraining.goalPerDay} pages/day
            </FormLabel>
            <FormGroup>
              {currentTraining.books.map(book => {
                return (
                  <FormControlLabel
                    key={book._id}
                    control={
                      <Checkbox
                        checked={book.status === 'finished' ?? false}
                        onChange={handleChange}
                        name={book._id}
                      />
                    }
                    label={
                      book.bookTitle + ' size:' + book.amountOfPages + ' pages'
                    }
                  />
                );
              })}
            </FormGroup>
          </FormControl>

          <Chart
            plan={currentTraining.goalPerDay}
            readingStatistics={
              currentTraining.readingStatistics
                ? calculateStatistics(currentTraining.readingStatistics)
                : []
            }
          />
        </Container>

        <Container>
          <AddResult />
        </Container>
        <button
          type="button"
          onClick={() => {
            deleteTraining(userTraining._id);
          }}
          disabled={isLoading}
        >
          Временная кнопка "Удалить тренировку"
        </button>
      </>
    )
  );
};

export default StatisticView;
