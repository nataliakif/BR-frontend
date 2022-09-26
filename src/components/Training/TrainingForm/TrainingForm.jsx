import React from "react";
import DatePickerInput from "../DatePicker/DatePicker";
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
        <input className={s.bookInput} placeholder="Choose one book from the library"></input>
       <button type="button" className={s.btnAdd}>Add</button>
       </div>
       <TrainingList/>
       <Formik/>
        </form>
        
    )
}

export default TrainingForm;