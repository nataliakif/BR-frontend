import Container from 'components/Container';
import CountdownTimers from 'components/CountdownTimers';
import MyGoals from 'components/MyGoals';
import AddResult from 'components/AddResult/AddResult';

const StatisticView = () => {
  const threeDays = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // for Example

  return (
    <Container>
      {/* <CountdownTimers targetDate={threeDays} />
      <MyGoals /> */}
      <AddResult />
    </Container>
  );
};

export default StatisticView;
