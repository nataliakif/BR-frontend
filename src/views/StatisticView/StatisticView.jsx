import Container from 'components/Container';
import CountdownTimers from 'components/CountdownTimers';
import MyGoals from 'components/MyGoals';
import AddResult from 'components/AddResult/AddResult';
import { useFetchTrainingQuery } from '../../redux/training/trainingApi';

const StatisticView = () => {
  const threeDays = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // for Example
  const { data, error } = useFetchTrainingQuery();
  console.log(data, error);
  return (
    <>
      <Container>
        <CountdownTimers targetDate={threeDays} />
        <MyGoals />
      </Container>
      <Container>
        <AddResult />
      </Container>
    </>
  );
};

export default StatisticView;
