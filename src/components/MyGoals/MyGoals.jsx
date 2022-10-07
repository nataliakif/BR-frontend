import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import s from './MyGoals.module.css';

const TwoGoals = ({ header, amount }) => {
  return (
    <div className={s.twoGoals}>
      <p>{amount}</p>
      <h4>{header}</h4>
    </div>
  );
};

const ThreeGoals = ({ header, amount }) => {
  return (
    <div className={s.threeGoals}>
      <p>{amount}</p>
      <h4>{header}</h4>
    </div>
  );
};

const MyGoals = ({
  bookAmount = 0,
  daysAmount = 0,
  booksLeft = 0,
  showBooksLeft = false,
}) => {
  const { t } = useTranslation();
  const container = booksLeft > 0 ? 'containerThreeGoals' : 'containerTwoGoals';
  const allGoals = showBooksLeft ? 'allThreeGoals' : 'allTwoGoals';

  return (
    <div className={s[container]}>
      <h2>{t('training.myGoals')}</h2>
      <div className={s[allGoals]}>
        {showBooksLeft ? (
          <>
            <ThreeGoals header={t('training.books')} amount={bookAmount} />
            <ThreeGoals header={t('training.days')} amount={daysAmount} />
            <ThreeGoals header={t('training.booksLeft')} amount={booksLeft} />
          </>
        ) : (
          <>
            <TwoGoals header={t('training.books')} amount={bookAmount} />
            <TwoGoals header={t('training.days')} amount={daysAmount} />
          </>
        )}
      </div>
    </div>
  );
};

MyGoals.propTypes = {
  bookAmount: PropTypes.number,
  daysAmount: PropTypes.number,
  booksLeft: PropTypes.number,
  showBooksLeft: PropTypes.bool,
};

export default MyGoals;
