import s from './MyGoals.module.css';
import PropTypes from 'prop-types';

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
  const container = booksLeft > 0 ? 'containerThreeGoals' : 'containerTwoGoals';
  const allGoals = showBooksLeft ? 'allThreeGoals' : 'allTwoGoals';

  return (
    <div className={s[container]}>
      <h2>My goals</h2>
      <div className={s[allGoals]}>
        {showBooksLeft ? (
          <>
            <ThreeGoals header={'Amount of books'} amount={bookAmount} />
            <ThreeGoals header={'Amount of days'} amount={daysAmount} />
            <ThreeGoals header={'Books left'} amount={booksLeft} />
          </>
        ) : (
          <>
            <TwoGoals header={'Amount of books'} amount={bookAmount} />
            <TwoGoals header={'Amount of days'} amount={daysAmount} />
          </>
        )}
      </div>
    </div>
  );
};

export default MyGoals;

MyGoals.propTypes = {
  bookAmount: PropTypes.number,
  daysAmount: PropTypes.number,
  booksLeft: PropTypes.number,
  showBooksLeft: PropTypes.bool,
};
