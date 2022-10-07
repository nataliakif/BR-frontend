import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import { useCreateTrainingMutation } from 'redux/training/trainingApi';
import { useFetchTrainingQuery } from 'redux/training/trainingApi';
import { useEditBookMutation } from 'redux/books/booksApi';
import getTrainingDaysAmount from 'helpers/getTrainingDaysAmount';
import getTotalPageAmount from 'helpers/getTotalPageAmount';

import s from './TrainingView.module.css';
import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';
import { Chart } from 'components/Chart/Chart';
import TrainingList from 'components/Training/TrainingList/TrainingList';
import Progress from 'components/Progress/Progress';
import Button from 'components/Button/Button';
import TrainingMobileList from '../../components/Training/TrainingList/TrainingMobileList/TrainingMobileList';
import useIsMobile from '../../helpers/useIsMobile';
import { BsArrowLeft } from 'react-icons/bs';

const TrainingView = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [selectedBooks, setSelectedGoingToReadBooks] = useState([]);
  const [planedPagesPerDay, setPlanedPagesPerDay] = useState(0);
  const [trainingDaysAmount, setTrainingDaysAmount] = useState(0);
  const [editBook] = useEditBookMutation();
  const { t } = useTranslation();
  const [showElement, setShowElement] = useState(false);

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
  const isMobile = useIsMobile();
  const showStButton = showStartButton();

  return isFetchingTraining ? (
    <Progress />
  ) : (
    <>
      <Container>
        <div className={s.training}>
          {!showElement && (
            <MyGoals
              bookAmount={selectedBooks.length}
              daysAmount={trainingDaysAmount}
            />
          )}
          <div className={s.wrapperContainer}>
            {(!isMobile || showElement) && (
              <TrainingForm
                goingToReadBooks={goingToReadBooks.filter(
                  book =>
                    !selectedBooks.map(book => book._id).includes(book._id)
                )}
                onStartDateChange={setStartDate}
                onFinishDateChange={setFinishDate}
                onBtnAddClick={selectBook}
              />
            )}
            {!showElement && !isMobile && (
              <TrainingList
                trainingBooks={selectedBooks}
                deleteBookFromList={onSelectedBookDelete}
              />
            )}
            {isMobile && !showElement && (
              <TrainingMobileList
                trainingBooks={selectedBooks}
                deleteBookFromList={onSelectedBookDelete}
              />
            )}

            {showElement && (
              <BsArrowLeft
                className={s.arrowButton}
                onClick={() => setShowElement(false)}
              />
            )}
            {showStButton && !showElement && (
              <div className={s.buttonWrapper}>
                <Button
                  id="startTraining"
                  className="main"
                  text={t('training.startTraining')}
                  onClick={onStartClick}
                  onEnded={isLoading}
                />
              </div>
            )}
          </div>
        </div>

        {!showElement && (
          <Chart plan={planedPagesPerDay} readingStatistics={[]} />
        )}
        {isMobile && !showElement && (
          <button
            type="button"
            className={s.addPageBtn}
            onClick={() => setShowElement(true)}
          >
            +
          </button>
        )}
      </Container>
    </>
  );
};

export default TrainingView;
