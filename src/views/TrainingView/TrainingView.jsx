import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';
import s from './TrainingVieew.module.css';
import { useState } from 'react';
import { useFetchBooksQuery } from 'redux/books/booksApi';

const TrainingView = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [selectedBooks, setSelectedGoingToReadBooks] = useState([]);

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
          </div>
        </div>
      </Container>
    </>
  );
};

export default TrainingView;
