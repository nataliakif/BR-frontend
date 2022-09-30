import s from './AddResult.module.css';
// import DatePickerField from 'components/DatePickerField';
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
const AddResult = () => {
  const { data, error } = useFetchTrainingQuery();
  console.log(data, error);
  const [doingFineModal, setDoingFineModal] = useState(false);
  const closeDoingFineModal = () => {
    setDoingFineModal(false);
  };
  const onSubmit = async () => {
    setDoingFineModal(true);
  };
  return (
    <>
      <Formik
        initialValues={{ date: new Date(), pages: '' }}
        onSubmit={onSubmit}
        // validationSchema={schema(translation['AddReesultValidation'])}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Result</h2>
          <div className={s.wrapper}>
            <div className={s.fieldWrapper}>
              <p className={s.name}>Date</p>

              <DatePickerField name="date" className={s.input} />

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
