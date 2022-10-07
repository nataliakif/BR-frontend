import LoginForm from 'components/LoginForm';
import Container from 'components/Container';
import LoginInfoQuote from 'components/LoginInfoQuote';
import s from './LoginView.module.css';

const LoginView = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <section className={s.section}>
          <LoginForm />
        </section>
        <LoginInfoQuote />
      </div>
    </Container>
  );
};

export default LoginView;
