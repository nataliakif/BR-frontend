import React, { useState } from 'react';
import { useRef } from 'react';
import DatePickerInput from '../DatePicker/DatePicker';
import s from './TrainingForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const [startDate, setStartDate] = useState(null);
  const booksRef = useRef();

  return (
    <Formik initialValues={initialValues} validationSchema={schema}>
      {({ values, handleChange }) => (
        <Form autoComplete="off">
          <h1 className={s.title}>{t('training.myTraining')}</h1>

          <div className={s.dateContainer}>
            <div className={s.date}>
              <DatePickerInput
                name="start"
                minDate={new Date()}
                onChange={e => {
                  handleChange(e);
                  setStartDate(e);
                  onStartDateChange(e);
                }}
                dateFormat="dd-MM-yyyy"
                placeholderText={t('training.start')}
                autoComplete="off"
                required
              ></DatePickerInput>
              <span className={s.error}>
                <ErrorMessage className={s.eerror} name="start" />
              </span>
            </div>
            <div className={s.date}>
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
                placeholderText={t('training.finish')}
                autoComplete="off"
                required
              ></DatePickerInput>
              <span className={s.error}>
                <ErrorMessage name="finish" />
              </span>
            </div>
          </div>
          <div className={s.bookLabel}>
            <Field
              as="select"
              name="book"
              className={s.bookInput}
              defaultValue={'default'}
              innerRef={booksRef}
            >
              <option value="default" className={s.selectOption} disabled>
                {t('training.chooseBooks')}
              </option>
              {goingToReadBooks?.map(({ _id: id, bookTitle }) => (
                <option value={bookTitle} key={id}>
                  {bookTitle}
                </option>
              ))}
            </Field>
            <span className={s.error}>
              <ErrorMessage name="pages" />
            </span>
            <button
              type="button"
              className={s.btnAdd}
              onClick={() => {
                const title = booksRef.current.value;
                if (title !== 'default' && title) {
                  onBtnAddClick(
                    goingToReadBooks.find(
                      book => book.bookTitle === booksRef.current.value
                    )
                  );
                }
              }}
            >
              {t('library.add')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default TrainingForm;
