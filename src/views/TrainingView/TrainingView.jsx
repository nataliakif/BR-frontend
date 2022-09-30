import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';
import s from './TrainingVieew.module.css';
import { useState } from 'react';

const TrainingView = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);

  return (
    <>
      <Container>
        <div className={s.training}>
          <MyGoals />
          <div className={s.wrapperContainer}>
            <TrainingForm
              onStartDateChange={setStartDate}
              onFinishDateChange={setFinishDate}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default TrainingView;
