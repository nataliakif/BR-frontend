import React from 'react';
import DatePickerInput from '../DatePicker/DatePicker';

import s from './TrainingForm.module.css';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
  const TrainingFormSchema = Yup.object().shape({
    start: Yup.date().required('Enter the first day of training'),
    finish: Yup.date().required('Enter the last day of training'),
    book: Yup.object().required('Choose one book'),
  });

  return (
    <div className={s.form} autoComplete="off">
      <h1 className={s.title}> My training</h1>

      <Formik initialValues={initialValues}
      validationSchema={TrainingFormSchema}
      >
        {({ values, setFieldValue }) => (
          <Form
            onSubmit={() => {
              console.log(values);
            }}
          >
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
                onChange={onFinishDateChange}
                dateFormat="dd-MM-yyyy"
                placeholderText="Finish"
                autoComplete="off"
                required
              />
            </div>
            <div className={s.bookLabel}>
              <Field
                as="select"
                name="book"
                className={s.bookInput}
                placeholder=" Select one book of your library"
              >
                {goingToReadBooks?.map(({ _id: id, bookTitle }) => (
                  <option value={bookTitle} key={id}>
                    {bookTitle}
                  </option>
                ))}
              </Field>
              <button
                type="button"
                className={s.btnAdd}
                onClick={() => {
                  //             console.log(values);
                  onBtnAddClick(
                    goingToReadBooks.find(
                      book => book.bookTitle === values.book
                    )
                  );
                }}
              >
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>


  );
};
export default TrainingForm;
