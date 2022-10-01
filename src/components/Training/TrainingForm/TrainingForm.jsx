import React from 'react';
import DatePickerInput from '../DatePicker/DatePicker';
//import { useState } from "react";
import { TiArrowSortedDown } from 'react-icons/ti';
import s from './TrainingForm.module.css';
import TrainingList from '../TrainingList/TrainingList';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import {
//   useCreateTrainingMutation,
//   useFetchTrainingQuery,
// } from 'redux/training/trainingApi';

const initialValues = {
  startDate: '',
  finishDate: '',
  books: '',
};

const TrainingForm = ({ onStartDateChange, onFinishDateChange }) => {
  // const [data, { isLoading }] = useFetchTrainingQuery();

  const TrainingFormSchema = Yup.object().shape({
    start: Yup.date().required('Enter the first day of training'),
    finish: Yup.date().required('Enter the last day of training'),
    book: Yup.object().required('Choose one book'),
  });
  console.log(onStartDateChange);
  const handleSubmit = () => {};
  return (
    <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
      <h1 className={s.title}> My training</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={TrainingFormSchema}
      >
        {({ values, setFieldValue }) => (
          <div className={s.dateContainer}>
            <DatePickerInput
              name="start"
              minDate={new Date()}
              onChange={onStartDateChange}
              dateFormat="dd-MM-yyyy"
              placeholderText="Start"
              autoComplete="off"
              required
            />
            <DatePickerInput
              name="finish"
              minDate={Date.now()}
              onChange={() => {}}
              dateFormat="dd-MM-yyyy"
              placeholderText="Finish"
              autoComplete="off"
              required
            />
          </div>
        )}
      </Formik>
      <Formik>
        <div className={s.bookLabel}>
          <div className={s.bookInput}>
            <span className={s.bookPlaceholder}>
              Select one book of your library
            </span>
            <TiArrowSortedDown width="20" height="20" className={s.arrow} />
          </div>
          <button type="button" className={s.btnAdd} onClick={() => {}}>
            Add
          </button>
        </div>
      </Formik>
      <TrainingList className={s.arrow} />
      <Formik />
    </form>
  );
};
export default TrainingForm;
