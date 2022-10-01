import s from './AddResult.module.css';
import Button from 'components/Button/Button';
import sprite from './sprite.svg';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePickerField from 'components/DatePicker';
import DoingFineModal from 'components/modals/DoingFineModal/DoingFineModal';
import {
  useFetchTrainingQuery,
  // useDeleteTrainingMutation,
  // useEditTrainingMutation,
} from '../../redux/training/trainingApi';
import * as yup from 'yup';

const AddResult = () => {
  const [doingFineModal, setDoingFineModal] = useState(false);
  const closeDoingFineModal = () => {
    setDoingFineModal(false);
  };
  const onSubmit = async () => {
    setDoingFineModal(true);
  };
  let schema = yup.object().shape({
    pages: yup
      .number()
      .integer('Enter an integer.')
      .positive('The number of pages is more than 1')
      .min(1, 'May not be less then 1')
      .max(1000, 'Enter a number from 1 to 1000') //добавить кол-во страниц в планинге
      .required('Fill the number of read pages.')
      .typeError('The number of pages must be from 1 to 1000'),
  });
  return (
    <>
      <Formik
        initialValues={{ date: new Date(), pages: '' }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Result</h2>
          <div className={s.wrapper}>
            <div className={s.fieldWrapper}>
              <p className={s.name}>Date</p>

              <DatePickerField
                name="date"
                className={s.input}
                maxDate={Date.now()}
              />

              <svg className={s.iconSvg} style={{ width: '24px' }}>
                <use href={`${sprite}#icon-Polygon`}></use>
              </svg>
            </div>
            <div className={s.fieldWrapper}>
              <p className={s.name}>Amount of pages</p>
              <Field className={s.input} type="number" name="pages" />
              <span className={s.error}>
                <ErrorMessage name="pages" />
              </span>
            </div>
          </div>
          <div className={s.button}>
            <Button type="submit" className="main" text="AddResult" />
          </div>
          <h2 className={s.statisticsTitle}>STATISTICS</h2>
          {/* {data && (
            <ul className={s.statistics}>
              
            </ul> */}
          {/* )} */}
        </Form>
      </Formik>
      <DoingFineModal open={doingFineModal} onClose={closeDoingFineModal} />
    </>
  );
};

export default AddResult;
