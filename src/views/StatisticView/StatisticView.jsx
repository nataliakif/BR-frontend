import Container from 'components/Container';
import CountdownTimers from 'components/CountdownTimers';
import MyGoals from 'components/MyGoals';
import AddResult from 'components/AddResult/AddResult';
import s from './StatisticView.module.css';
import {
  useDeleteTrainingMutation,
  useFetchTrainingQuery,
  useEditTrainingMutation,
} from '../../redux/training/trainingApi';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Progress from 'components/Progress/Progress';
import StatisticsList from 'components/StatisticsList/StatisticsList';
import getTrainingDaysAmount from 'helpers/getTrainingDaysAmount';
import { Chart } from 'components/Chart/Chart';
import calculateStatistics from 'services/calculateStatistics';
import { useEditBookMutation } from 'redux/books/booksApi';
import TrainingExecutedModal from 'components/modals/TrainingExecutedModal/TrainingExecutedModal';
import StatisticsListMobile from 'components/StatisticsList/StatisticsListMobile';
import useIsMobile from 'helpers/useIsMobile';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';

const findAlreadyReadBook = (books, alreadyReadPages) => {
  let readPagesLeft = alreadyReadPages;
  const result = books.map(book => {
    return { ...book, alreadyFinished: false };
  });
  for (let i = 0; i < result.length; i += 1) {
    if (result[i].amountOfPages <= readPagesLeft) {
      result[i].alreadyFinished = true;
    }
    readPagesLeft = readPagesLeft - result[i].amountOfPages;
  }
  return result;
};

const StatisticView = () => {
  const { data: userTraining, isLoading: isFetchingTraining } =
    useFetchTrainingQuery();

  const [deleteTraining, { isLoading }] = useDeleteTrainingMutation();

  const [editBook] = useEditBookMutation();

  const navigate = useNavigate();

  const [currentTraining, setCurrentTraining] = useState(null);

  const [updateResult] = useEditTrainingMutation();

  const isMobile = useIsMobile();

  const isTrainingExecuted =
    currentTraining?.alreadyReadPages >= currentTraining?.trainingPagesAmount ??
    false;

  useEffect(() => {
    if (!userTraining) {
      navigate('/training');
    } else {
      const { startDate, finishDate, books, readStatistics, _id } =
        userTraining;
      const trainingDaysAmount = getTrainingDaysAmount(startDate, finishDate);
      const trainingPagesAmount =
        books.reduce((currentValue, book) => {
          return (currentValue += Number.parseInt(book.amountOfPages));
        }, 0) ?? 0;
      const alreadyReadPages = userTraining.readStatistics.reduce(
        (prevVal, stat) => (prevVal += Number.parseInt(stat.pageAmount)),
        0
      );
      const booksWithCurrentStatus = findAlreadyReadBook(
        books,
        alreadyReadPages
      );
      const notFinishedBooksAmount = booksWithCurrentStatus.filter(
        book => !book.alreadyFinished
      ).length;
      setCurrentTraining(prevState => ({
        _id,
        startDate,
        finishDate,
        readStatistics,
        trainingDaysAmount,
        trainingPagesAmount,
        goalPerDay: Math.round(trainingPagesAmount / trainingDaysAmount),
        alreadyReadPages,
        books: booksWithCurrentStatus,
        notFinishedBooksAmount,
        userHadReadNewBook:
          notFinishedBooksAmount < prevState?.notFinishedBooksAmount,
      }));
    }
  }, [navigate, userTraining]);

  const handleCloseOfTraining = () => {
    currentTraining.books.forEach(book => {
      editBook({
        ...book,
        id: book._id,
        status: 'finished',
      });
    });
    deleteTraining(userTraining._id);
  };

  console.log(new Date(currentTraining?.finishDate).getTime());

  return isFetchingTraining ? (
    <Progress />
  ) : (
    currentTraining && (
      <>
        <div className={s.statistics}>
          <div className={s.leftWrapper}>
            <CountdownTimers
              targetDate={new Date(currentTraining.finishDate).getTime()}
            />
          </div>
        </div>
        <Container>
          <MyGoals
            bookAmount={currentTraining.books.length}
            daysAmount={currentTraining.trainingDaysAmount}
            booksLeft={currentTraining.notFinishedBooksAmount}
            showBooksLeft={true}
          />
        </Container>
        {/* <Container>
            <TrainingForm/>
          </Container> */}
        <Container>
          {isMobile ? (
            <StatisticsListMobile books={currentTraining.books} />
          ) : (
            <StatisticsList books={currentTraining.books} />
          )}
        </Container>
        <Container>
          <div className={s.statistics}>
            <div className={s.leftWrapper}>
              <Chart
                plan={currentTraining.goalPerDay}
                readingStatistics={calculateStatistics(
                  currentTraining.readStatistics ?? []
                )}
              />
            </div>
            <AddResult data={currentTraining} updateResult={updateResult} />
          </div>
        </Container>
        {isTrainingExecuted && (
          <TrainingExecutedModal
            handleCloseOfTraining={handleCloseOfTraining}
            isLoading={isLoading}
          />
        )}{' '}
      </>
    )
  );
};

export default StatisticView;
