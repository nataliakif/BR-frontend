import s from './AddResult.module.css';
import Button from 'components/Button/Button';
import sprite from './sprite.svg';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePickerField from 'components/DatePicker';
import DoingFineModal from 'components/modals/DoingFineModal/DoingFineModal';

import * as yup from 'yup';

const AddResult = ({
  data,
  updateResult,
  plan = data.goalPerDay,
  hideAddBtn = false,
  start = data.startDate,
  finish = data.finishDate,
}) => {
  console.log(data);
  const { startDate, readStatistics: results } = data;
  const [doingFineModal, setDoingFineModal] = useState(false);

  const onSubmit = values => {
    updateResult({
      ...data,
      trainingId: data._id,
      readStatistics: [
        ...data.readStatistics,
        { dateTime: values.date, pageAmount: values.pages },
      ],
    });
    plan && plan > values.pages && setDoingFineModal(true);
  };

  const sortResults = [...results].sort(
    (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
  );

  console.log(results);

  const closeDoingFineModal = () => {
    setDoingFineModal(false);
  };

  let schema = yup.object().shape({
    pages: yup
      .number()
      .integer('Enter an integer.')
      .positive('The number of pages is more than 1')
      .min(1, 'May not be less then 1')
      .max(data.trainingPagesAmount, 'More then the pages in training')
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
        {({ values }) => (
          <Form className={s.form}>
            <h2 className={s.title}>Result</h2>
            <div className={s.wrapper}>
              <div className={s.fieldWrapper}>
                <p className={s.name}>Date</p>

                <DatePickerField
                  name="date"
                  className={s.input}
                  minDate={new Date(start)}
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
              <Button
                type="submit"
                disabled={hideAddBtn}
                className="main"
                text="AddResult"
              />
            </div>
            <h2 className={s.statisticsTitle}>STATISTICS</h2>
            {results && (
              <ul className={s.statistics}>
                {sortResults.map(({ pageAmount, dateTime }, index) => (
                  <li className={s.item} key={index}>
                    <p className={s.day}>
                      {new Date(dateTime).toLocaleDateString()}
                    </p>
                    <p className={s.data}>
                      {new Date(dateTime).toLocaleTimeString()}
                    </p>
                    <p className={s.pages}>
                      {pageAmount}
                      <span>pages</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Form>
        )}
      </Formik>
      <DoingFineModal open={doingFineModal} onClose={closeDoingFineModal} />
    </>
  );
};

export default AddResult;
