import Container from 'components/Container';
import MyGoals from 'components/MyGoals';
import TrainingForm from 'components/Training/TrainingForm/TrainingForm';
import s from './TrainingVieew.module.css';

const TrainingView = () => {
  return (
    <>
      <Container>
        <div className={s.training}>
          <MyGoals />
          <div className={s.wrapperContainer}>
            <TrainingForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default TrainingView;
