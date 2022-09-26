import { useCountdown } from 'services/hooks/useCountdown';
import s from './CountdownTimers.module.css';

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
  return (
    <div className={s.countdownTimer}>
      <h3>{header}</h3>
      <div className={s.showCounter}>
        <DateTimeDisplay value={days} type={'DAYS'} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'HRS'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'MINS'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'SECS'} />
      </div>
    </div>
  );
};

const CountdownTimers = ({ targetDate }) => {
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
        header={'Years countdown'}
        days={daysUntilNextYear}
        hours={hoursUntilNextYear}
        minutes={minutesUntilNextYear}
        seconds={secondsUntilNextYear}
      />
      <ShowCounter
        header={'Goals countdown'}
        days={daysUntilTargetDate}
        hours={hoursUntilTargetDate}
        minutes={minutesUntilTargetDate}
        seconds={secondsUntilTargetDate}
      />
    </div>
  );
};

export default CountdownTimers;
