import { useCountdown } from 'services/hooks/useCountdown';
import PropTypes from 'prop-types';
import s from './CountdownTimers.module.css';
import { useTranslation } from 'react-i18next';

const DateTimeDisplay = ({ value, type }) => {
  const minTwoDigits = value => {
    return ('0' + value).slice(-2);
  };

  return (
    <div className={s.countdown}>
      <p>{minTwoDigits(value)}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ header, days, hours, minutes, seconds }) => {
  const { t } = useTranslation();
  return (
    <div className={s.countdownTimer}>
      <h3>{header}</h3>
      <div className={s.showCounter}>
        <DateTimeDisplay value={days} type={t('statistics.days')} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={t('statistics.hrs')} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={t('statistics.mins')} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={t('statistics.secs')} />
      </div>
    </div>
  );
};

const CountdownTimers = ({ targetDate }) => {
  const { t } = useTranslation();
  const [
    daysUntilNextYear,
    hoursUntilNextYear,
    minutesUntilNextYear,
    secondsUntilNextYear,
  ] = useCountdown(Date.parse(new Date(new Date().getFullYear() + 1, 0, 1)));
  const [
    daysUntilTargetDate,
    hoursUntilTargetDate,
    minutesUntilTargetDate,
    secondsUntilTargetDate,
  ] = useCountdown(targetDate);

  return (
    <div className={s.countdownTimers}>
      <ShowCounter
        header={t('statistics.yearsCountdown')}
        days={daysUntilNextYear}
        hours={hoursUntilNextYear}
        minutes={minutesUntilNextYear}
        seconds={secondsUntilNextYear}
      />
      <ShowCounter
        header={t('statistics.goalsCountdown')}
        days={
          daysUntilTargetDate < 0
            ? -1 * daysUntilTargetDate
            : daysUntilTargetDate
        }
        hours={
          hoursUntilTargetDate < 0
            ? -1 * hoursUntilTargetDate
            : hoursUntilTargetDate
        }
        minutes={
          minutesUntilTargetDate < 0
            ? -1 * minutesUntilTargetDate
            : minutesUntilTargetDate
        }
        seconds={
          secondsUntilTargetDate < 0
            ? -1 * secondsUntilTargetDate
            : secondsUntilTargetDate
        }
      />
    </div>
  );
};

export default CountdownTimers;

CountdownTimers.propTypes = {
  targetDate: PropTypes.string,
};
