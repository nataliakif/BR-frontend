import React from "react";
import DatePickerInput from "../DatePicker/DatePicker";
import { TiArrowSortedDown } from "react-icons/ti"
import s from "./TrainingForm.module.css";
import TrainingList from "../TrainingList/TrainingList";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

const TrainingFormSchema = Yup.object().shape({
    start: Yup.date().required("Enter the first day of training"),
    end: Yup.date().required("Enter the last day of training"),
    book: Yup.object().required("Choose one book")
});

const TrainingForm = () => {

const formik = useFormik({
    initialValues: {
        start: '',
        end: '',
        book: '',
    },
    validationSchema: TrainingFormSchema,
    onSubmit: values => console.log(values)
})

    return (
       <form
        className={s.form}
        autoComplete="off"
        onSubmit={formik.handleSubmit}>
       <h1 className={s.title}> My training</h1> 
       <div className={s.dateContainer}> 
       <DatePickerInput/>
       <DatePickerInput/>
       </div> 
       <div className={s.bookLabel}>
        <div className={s.bookInput} >
          <TiArrowSortedDown width="20" height="20" className={s.arrow}/>
          </div>
       <button type="button" className={s.btnAdd}>Add</button>
       </div>
       <TrainingList className={s.arrow}/>
       <Formik/>
        </form>
        
    )
}

export default TrainingForm;