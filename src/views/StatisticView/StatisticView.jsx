import Container from 'components/Container';
import CountdownTimers from 'components/CountdownTimers';
import MyGoals from 'components/MyGoals';
import AddResult from 'components/AddResult/AddResult';
import {
  useDeleteTrainingMutation,
  useFetchTrainingQuery,
} from '../../redux/training/trainingApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const StatisticView = () => {
  const threeDays = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // for Example
  const { data: userTraining } = useFetchTrainingQuery();
  const [deleteTraining, { isLoading }] = useDeleteTrainingMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userTraining) {
      navigate('/training');
    }
  }, [navigate, userTraining]);
  return (
    <>
      <Container>
        <CountdownTimers targetDate={threeDays} />
        <MyGoals />
      </Container>
      <Container>
        <AddResult />
      </Container>
      <button
        type="button"
        onClick={() => {
          deleteTraining(userTraining._id);
        }}
        disabled={isLoading}
      >
        Временная кнопка "Удалить тренировку"
      </button>
    </>
  );
};

export default StatisticView;
