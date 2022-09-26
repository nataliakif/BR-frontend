import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import s from "./DatePicker.module.css"
import { RiCalendar2Line } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti"


const DatePickerInput = ({ inputDate, text, onChange}) => {

    return (
        <div className={s.dateWrapper}>
        <DatePicker
        dateFormat="dd-MM-yyyy"
        name="date"
        selected={inputDate}
        onChange={(date) => onChange(date)}
        minDate={new Date()}
        className={s.dateInput}
      />
      <RiCalendar2Line className={s.dateIcon}/>
      <TiArrowSortedDown className={s.dateArrow}/>
      </div>
    )
};

export default DatePickerInput;