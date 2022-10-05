import { setQuote, getQuote } from 'redux/authUser/authUserSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as QuoteMobileIcon } from '../../images/quote.svg';
import s from './LoginInfoQuote.module.css';
import { useTranslation } from 'react-i18next';

const LoginInfoQuote = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const number = useSelector(getQuote);

  useEffect(() => {
    const newNumber = number < 10 ? number + 1 : 1;
    dispatch(setQuote(newNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.container}>
      <QuoteMobileIcon style={{ marginBottom: '15px' }} />
      <p className={s.text}>{t(`quotes.quote${[number - 1]}`)}</p>
      <hr />
      <p className={s.text}>{t(`quotes.author${[number - 1]}`)}</p>
    </div>
  );
};

export default LoginInfoQuote;
