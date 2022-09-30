import React from "react";
import DatePickerInput from "../DatePicker/DatePicker";
//import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti"
import s from "./TrainingForm.module.css";
import TrainingList from "../TrainingList/TrainingList";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import { useCreateTrainingMutation, useFetchTrainingQuery} from "redux/training/trainingApi";
import { useMemo } from "react";


const TrainingForm = ({ startDate, finishDate, selectedBooks, selectedBook }) => {
    const { data, isSuccess } = useFetchTrainingQuery();
    const [addTraining] = useCreateTrainingMutation();

const bookId = useMemo(
    () => selectedBooks.map(({ _id }) => _id),
    [selectedBooks]
);

const allBooks = useMemo(
    () => 
    data 
    ?.filter(({ id }) => !bookId.includes(id))
    .map(({ id, title }) => [id, title]),
    [data, bookId]
);

const addBook = (values, setFieldValue) => {
    if(!values.book) return;
    const newBook =data.find(({ id}) => id === values.book);
    selectedBook(newBook);
    setFieldValue('book', '');
}

const onSubmit = async ({ startDate, finishDate, books: bookId}) => {
    const tranding = { startDate, finishDate};
    try {
        await addTraining(tranding).unwrap()
    } catch (error) {
        console.error(error)
    }
}

const TrainingFormSchema = Yup.object().shape({
    start: Yup.date().required("Enter the first day of training"),
    finish: Yup.date().required("Enter the last day of training"),
    book: Yup.object().required("Choose one book")
});


const formik = useFormik({
    initialValues: {
        startDate: startDate ? startDate : '',
        finishDate: finishDate ? finishDate : '',
        book: '',
    },
    validationSchema: TrainingFormSchema,
    onSubmit: {onSubmit}
    
});

if(isSuccess)
    return (
       <form
        className={s.form}
        autoComplete="off"
        onSubmit={formik.handleSubmit}>
       <h1 className={s.title}> My training</h1> 

       <Formik>
        {({ values, setFieldValue }) => (
       <div className={s.dateContainer}> 
       <DatePickerInput
         name="start"
         minDate={new Date()}
         validate={formik.values.start}
         onChange={values => setFieldValue()}
         dateFormat="yyyy-MM-dd"
         placeholderText="Start"
         autoComplete="off"
         required
         />
       <DatePickerInput
         name='finish'
         minDate={new Date()}
         validate={formik.values.finish}
         onChange={values => setFieldValue()}
         dateFormat="yyyy-MM-dd"
         placeholderText="Finish"
         autoComplete="off"
         required
       />
       </div> 
        )}
       </Formik>
       <Formik>

       <div className={s.bookLabel}>
        <div className={s.bookInput} >
            <span className={s.bookPlaceholder}>Select one book of your library</span>
          <TiArrowSortedDown width="20" height="20" className={s.arrow}/>
          </div>
       <button type="button" 
          className={s.btnAdd}
          onClick={() => addBook()}
          >Add
          </button>
       </div>
       </Formik>
       <TrainingList className={s.arrow}/>
       <Formik/>
        </form>
        
    )
  
}
export default TrainingForm;