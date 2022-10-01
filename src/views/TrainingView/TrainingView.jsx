import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';
import s from './TrainingVieew.module.css';
import { useState, useEffect  } from 'react';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import { Chart } from 'components/Chart/Chart';
import TrainingList from 'components/Training/TrainingList/TrainingList';


const TrainingView = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [selectedBooks, setSelectedGoingToReadBooks] = useState([]);
  const [datesAmount, setDatesAmount] = useState(0);

  useEffect(() => {
    if (startDate && finishDate) {
      setDatesAmount(
        (new Date(finishDate) - new Date(startDate)) / (60 * 60 * 24 * 1000)
      );
    }
  }, [startDate, finishDate]);

  const selectBook = book => {
    setSelectedGoingToReadBooks([...selectedBooks, book]);
  };

  const { data } = useFetchBooksQuery();

  const goingToReadBooks = data?.filter(
    book => book.status === 'going_to_read'
  );

  return (
    <>
      <Container>
        <div className={s.training}>
          <MyGoals />
          <div className={s.wrapperContainer}>
            <TrainingForm
              goingToReadBooks={goingToReadBooks}
              onStartDateChange={setStartDate}
              onFinishDateChange={setFinishDate}
              onBtnAddClick={selectBook}
            />
            {/*  <Chart plan={datesAmount} readingStatistics={[]} /> */}
          </div>
        </div>
        <TrainingList trainingBooks={goingToReadBooks} />
      </Container>
    </>
  );
};

export default TrainingView;
