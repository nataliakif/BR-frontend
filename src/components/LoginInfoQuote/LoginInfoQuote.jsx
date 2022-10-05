import { setQuote, getQuote } from 'redux/authUser/authUserSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as QuoteMobileIcon } from '../../images/quote.svg';
import quotes from '../../dataFiles/quotes.json';
import s from './LoginInfoQuote.module.css';

const LoginInfoQuote = () => {
  const dispatch = useDispatch();
  const number = useSelector(getQuote);

  useEffect(() => {
    const newNumber = number < 10 ? number + 1 : 1;
    dispatch(setQuote(newNumber));
    console.log(number, newNumber);
  }, []);

  return (
    <div className={s.container}>
      <QuoteMobileIcon style={{ marginBottom: '15px' }} />

      <p className={s.text}>
        {quotes[number - 1].quote}
        {/* Books are the ships of thoughts, wandering through the waves of time. */}
      </p>
      <hr />
      <p className={s.text}>{quotes[number - 1].author}</p>
    </div>
  );
};

export default LoginInfoQuote;
