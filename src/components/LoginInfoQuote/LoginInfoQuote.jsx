import { ReactComponent as QuoteMobileIcon } from '../../images/quote.svg';
import s from './LoginInfoQuote.module.css';
import { useTranslation } from 'react-i18next';

const LoginInfoQuote = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <QuoteMobileIcon style={{ marginBottom: '15px' }} />

      <p className={s.text}>{t('quote.books')}</p>
      <hr />
      <p className={s.text}>{t('quote.bacon')}</p>
    </div>
  );
};

export default LoginInfoQuote;
