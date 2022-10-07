import LoginForm from 'components/LoginForm';
import LoginInfoQuote from 'components/LoginInfoQuote';
import s from './LoginView.module.css';

const LoginView = () => {
  return (
    <div className={s.wrapper}>
      <section className={s.section}>
        <LoginForm />
      </section>
      <LoginInfoQuote />
    </div>
  );
};

export default LoginView;
