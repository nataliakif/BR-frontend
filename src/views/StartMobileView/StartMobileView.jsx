import { useTranslation } from 'react-i18next';
import s from './StartMobileView.module.css';

const StartMobileView = ({ setInfoMobile }) => {
  const { t } = useTranslation();

  return (
    <section className={s.wrapper}>
      <div className={s.listBox}>
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
        <div className={s.linkBox}>
          <a
            href="/BR-frontend/login"
            className={s.link}
            onClick={() => setInfoMobile(false)}
          >
            {t('RegisterForm.link')}
          </a>
          <a
            href="/BR-frontend/register"
            className={s.link}
            onClick={() => setInfoMobile(false)}
          >
            {t('RegisterForm.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default StartMobileView;
