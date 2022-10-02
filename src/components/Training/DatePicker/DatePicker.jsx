import React from 'react';
import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';
import { RiCalendar2Line } from 'react-icons/ri';
import { TiArrowSortedDown } from 'react-icons/ti';

const DatePickerInput = ({ onChange, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div className={s.dateWrapper}>
      <DatePicker
        className={s.dateInput}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={value => {
          setFieldValue(field.name, value);
          const selectedDate = new Date(value);
          const year = selectedDate.getFullYear();
          const date = selectedDate.getDate();
          const month = selectedDate.getMonth();
          console.log(selectedDate.getUTCDay());
          onChange(year + ',' + month + ',' + date);
        }}
      />
      <RiCalendar2Line className={s.dateIcon} />
      <TiArrowSortedDown className={s.dateArrow} />
    </div>
  );
};

export default DatePickerInput;
