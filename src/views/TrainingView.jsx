import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import Training from '../components/Training/TrainingWrapper';

const TrainingView = () => {
  return (
    <Container>
      <Training/>
      <MyGoals />
    </Container>
  );
};

export default TrainingView;
