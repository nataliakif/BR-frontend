import { ReactComponent as QuoteMobileIcon } from '../../images/mobile/quote.svg';
import s from './LoginInfoQuote.module.css';

const LoginInfoQuote = () => {
  return (
    <div className={s.container}>
      <QuoteMobileIcon style={{ marginBottom: '15px' }} />

      <p className={s.text}>
        Books are the ships of thoughts, wandering through the waves of time.
      </p>
      <hr />
      <p className={s.text}>Francis Bacon</p>
    </div>
  );
};

export default LoginInfoQuote;
