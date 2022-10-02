import Container from 'components/Container';
import CountdownTimers from 'components/CountdownTimers';
import MyGoals from 'components/MyGoals';
import { useState } from 'react';
import AddResult from 'components/AddResult/AddResult';
import {
  useFetchTrainingQuery,
  useEditTrainingMutation,
} from '../../redux/training/trainingApi';

const StatisticView = () => {
  const threeDays = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // for Example
  const { data, error } = useFetchTrainingQuery();
  console.log(data);
  const [updateResult] = useEditTrainingMutation();
  const [result, setResult] = useState([]);

  const addResult = values => {
    setResult([...result, values]);
  };

  return (
    data && (
      <>
        <Container>
          <CountdownTimers targetDate={threeDays} />
          <MyGoals />
        </Container>
        <Container>
          <AddResult
            data={data}
            updateResult={updateResult}
            onSubmitDate={addResult}
          />
        </Container>
      </>
    )
  );
};

export default StatisticView;
