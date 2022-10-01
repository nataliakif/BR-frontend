import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import { useState } from 'react'
import TrainingWrapper from 'components/Training/TrainingWrapper';

const TrainingView = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
console.log(startDate);

const onStartDateSelect = (value) => {
    setStartDate(value)
}
  return (
    <Container>
      <TrainingWrapper
       onStartDateChange={onStartDateSelect}
       onFinishDateChange={setFinishDate}
      />
      <MyGoals />
    </Container>
  );
};

export default TrainingView;
