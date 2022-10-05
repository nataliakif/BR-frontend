import s from './AddResult.module.css';
import Button from 'components/Button/Button';
import sprite from './sprite.svg';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePickerField from 'components/DatePicker';
import DoingFineModal from 'components/modals/DoingFineModal/DoingFineModal';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const AddResult = ({ data, updateResult, hideAddBtn = false }) => {
  console.log(data);
  const { t } = useTranslation();
  const {
    goalPerDay: plan,
    startDate,
    finishDate,
    readStatistics: results,
  } = data;
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
      .integer(t('validation.enterYear'))
      .positive(t('validation.pagesMin'))
      .min(1, t('validation.pagesMin1'))
      .max(data.trainingPagesAmount, t('validation.pagesMore'))
      .required(t('validation.fillPages'))
      .typeError(t('validation.pages1000')),
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
            <h2 className={s.title}>{t('statistics.result')}</h2>
            <div className={s.wrapper}>
              <div className={s.fieldWrapper}>
                <p className={s.name}>{t('statistics.date')}</p>

                <DatePickerField
                  name="date"
                  className={s.input}
                  minDate={new Date(startDate)}
                  maxDate={new Date(finishDate)}
                />

                <svg className={s.iconSvg} style={{ width: '24px' }}>
                  <use href={`${sprite}#icon-Polygon`}></use>
                </svg>
              </div>
              <div className={s.fieldWrapper}>
                <p className={s.name}>{t('statistics.amountPages')}</p>
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
                text={t('statistics.addResult')}
              />
            </div>
            <h2 className={s.statisticsTitle}>{t('statistics.statistics')}</h2>
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
                      <span>{t('statistics.pages')}</span>
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
