import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';
import s from './TrainingView.module.css';
import { useState, useEffect } from 'react';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import { Chart } from 'components/Chart/Chart';
import TrainingList from 'components/Training/TrainingList/TrainingList';
import getTrainingDaysAmount from 'helpers/getTrainingDaysAmount';
import getTotalPageAmount from 'helpers/getTotalPageAmount';
import { useCreateTrainingMutation } from 'redux/training/trainingApi';
import { useFetchTrainingQuery } from 'redux/training/trainingApi';
import { useNavigate } from 'react-router-dom';
import Progress from 'components/Progress/Progress';
import Button from 'components/Button/Button';
import { useEditBookMutation } from 'redux/books/booksApi';

const TrainingView = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [selectedBooks, setSelectedGoingToReadBooks] = useState([]);
  const [planedPagesPerDay, setPlanedPagesPerDay] = useState(0);
  const [trainingDaysAmount, setTrainingDaysAmount] = useState(0);
  const [editBook] = useEditBookMutation();

  const { data: userTraining, isLoading: isFetchingTraining } =
    useFetchTrainingQuery();

  const navigate = useNavigate();

  const [createTraining, { isLoading }] = useCreateTrainingMutation();

  useEffect(() => {
    if (userTraining) {
      navigate('/statistics');
    }
  }, [navigate, userTraining]);

  useEffect(() => {
    if (startDate && finishDate) {
      setTrainingDaysAmount(getTrainingDaysAmount(startDate, finishDate));
    }
  }, [finishDate, startDate]);

  useEffect(() => {
    if (selectedBooks.length > 0 && trainingDaysAmount > 0) {
      setPlanedPagesPerDay(
        Math.round(getTotalPageAmount(selectedBooks) / trainingDaysAmount)
      );
    } else {
      setPlanedPagesPerDay(0);
    }
  }, [selectedBooks, trainingDaysAmount]);

  const onSelectedBookDelete = id => {
    setSelectedGoingToReadBooks(selectedBooks.filter(book => book._id !== id));
  };

  const selectBook = book => {
    setSelectedGoingToReadBooks([
      ...selectedBooks,
      { ...book, isSelected: true },
    ]);
  };

  const onStartClick = () => {
    createTraining({
      books: selectedBooks.map(book => book._id),
      startDate,
      finishDate,
    });
    selectedBooks.forEach(book => {
      editBook({
        ...book,
        id: book._id,
        status: 'reading_now',
      });
    });
  };

  const { data } = useFetchBooksQuery();

  const goingToReadBooks =
    data
      ?.filter(book => book.status === 'going_to_read')
      .map(book => {
        return { ...book, isSelected: false };
      }) ?? [];

  const showStartButton = () => {
    if (startDate && finishDate && selectedBooks.length > 0) {
      return true;
    }
    return false;
  };

  const showStButton = showStartButton();

  return isFetchingTraining ? (
    <Progress />
  ) : (
    <>
      <Container>
        <div className={s.training}>
          <MyGoals
            bookAmount={selectedBooks.length}
            daysAmount={trainingDaysAmount}
          />
          <div className={s.wrapperContainer}>
            <TrainingForm
              goingToReadBooks={goingToReadBooks.filter(
                book => !selectedBooks.map(book => book._id).includes(book._id)
              )}
              onStartDateChange={setStartDate}
              onFinishDateChange={setFinishDate}
              onBtnAddClick={selectBook}
            />
            <TrainingList
              trainingBooks={selectedBooks}
              deleteBookFromList={onSelectedBookDelete}
            />
          </div>
        </div>
      </Container>
      <Container>
        {showStButton && (
          <Button
            id="startTraining"
            className="main"
            text="Start training"
            onClick={onStartClick}
            onEnded={isLoading}
          />
        )}
        <Chart plan={planedPagesPerDay} readingStatistics={[]} />
      </Container>
    </>
  );
};

export default TrainingView;
