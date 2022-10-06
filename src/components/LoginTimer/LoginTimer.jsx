import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import s from './LoginTimer.module.css';

const LoginTimer = () => {
  const [timer, setTimer] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const { t } = useTranslation();

  useEffect(() => {
    if (timer) {
      const timerLink = setInterval(() => setSeconds(seconds - 1), 1000);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
      if (minutes === 0 && seconds === 0) {
        setTimer(false);
      }
      return () => clearInterval(timerLink);
    }
  }, [minutes, seconds, timer]);
  const resetTimer = () => {
    setMinutes(1);
    setSeconds(30);
  };

  const handleClick = () => {
    setTimer(true);
    resetTimer();
  };

  return (
    <>
      {timer ? (
        <span>
          &nbsp;
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </span>
      ) : (
        <span className={s.changePage} onClick={handleClick}>
          {t('LoginForm.newPassword')}
        </span>
      )}
    </>
  );
};

export default LoginTimer;
