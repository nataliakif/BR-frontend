import React, { useState } from 'react';
import DatePickerInput from '../DatePicker/DatePicker';
import s from './TrainingForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  startDate: '',
  finishDate: '',
  books: '',
};

const TrainingForm = ({
  onStartDateChange,
  onFinishDateChange,
  goingToReadBooks,
  onBtnAddClick,
}) => {
  const schema = yup.object().shape({
    start: yup.date().required('Enter the first day of training'),
    finish: yup.date().required('Enter the last day of training'),
    book: yup.object().required('Choose one book'),
  });

  const [startDate, setStartDate] = useState(null);
  return (
    <Formik initialValues={initialValues} validationSchema={schema}>
      {({ values, handleChange }) => (
        <Form
          onChange={() => {
            console.log(values);
          }}
        >
          <div className={s.form} autoComplete="off">
            <h1 className={s.title}> My training</h1>
          </div>
          <div className={s.dateContainer}>
            <DatePickerInput
              name="start"
              minDate={new Date()}
              onChange={e => {
                handleChange(e);
                setStartDate(e);
                onStartDateChange(e);
              }}
              dateFormat="dd-MM-yyyy"
              placeholderText="Start"
              autoComplete="off"
              required
            ></DatePickerInput>
            <ErrorMessage name="start" />

            <DatePickerInput
              name="finish"
              minDate={new Date(startDate).setDate(
                new Date(startDate).getDate() + 1
              )}
              maxDate={new Date(startDate).setDate(
                new Date(startDate).getDate() + 32
              )}
              onChange={onFinishDateChange}
              dateFormat="dd-MM-yyyy"
              placeholderText="Finish"
              autoComplete="off"
              required
            ></DatePickerInput>
            <ErrorMessage name="finish" />
          </div>
          <div className={s.bookLabel}>
            <Field
              as="select"
              name="book"
              className={s.bookInput}
              defaultValue={'default'}
            >
              <option value="default" className={s.selectOption} disabled>
                Choose books from the library
              </option>
              {goingToReadBooks?.map(({ _id: id, bookTitle }) => (
                <option value={bookTitle} key={id}>
                  {bookTitle}
                </option>
              ))}
            </Field>

            <ErrorMessage name="pages" />

            <button
              type="button"
              className={s.btnAdd}
              onClick={() => {
                onBtnAddClick(
                  goingToReadBooks.find(book => book.bookTitle === values.book)
                );
              }}
            >
              Add
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default TrainingForm;
