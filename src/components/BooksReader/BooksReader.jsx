import s from './BooksReader.module.css';
import { useTranslation } from 'react-i18next';

const BooksReader = () => {
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Books Reading</h1>
      <h2 className={s.subtitle}>{t('modal.willHelp')}</h2>
      <ul className={s.list}>
        <li className={s.item}>{t('modal.createGoal')}</li>
        <li className={s.item}>{t('modal.process')}</li>
        <li className={s.item}>{t('modal.trackSuccess')}</li>
      </ul>

      <h2 className={s.subtitle}>{t('modal.youMay')}</h2>
      <ul className={s.list}>
        <li className={s.item}>{t('modal.pose')}</li>
        <li className={s.item}>{t('modal.improve')}</li>
        <li className={s.item}>{t('modal.become')}</li>
      </ul>
    </div>
  );
};

export default BooksReader;
