import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import DatePickerField from '../DatePicker';
import Button from 'components/Button/Button';
import DoingFineModal from 'components/modals/DoingFineModal/DoingFineModal';
import PropTypes from 'prop-types';
import sprite from './sprite.svg';
import s from './AddResult.module.css';

const AddResult = ({ data, updateResult }) => {
  const { t } = useTranslation();

  const {
    goalPerDay: plan,
    startDate,
    readStatistics: results,
    alreadyReadPages,
    isTrainingExecuted,
    trainingPagesAmount,
  } = data;
  const [doingFineModal, setDoingFineModal] = useState(false);

  const onSubmit = (values, actions) => {
    updateResult({
      ...data,
      trainingId: data._id,
      readStatistics: [
        ...data.readStatistics,
        { dateTime: values.date, pageAmount: values.pages },
      ],
    });
    if (
      plan > values.pages &&
      alreadyReadPages + values.pages < trainingPagesAmount
    ) {
      setDoingFineModal(true);
    }
    actions.resetForm();
  };

  const sortResults = [...results].sort(
    (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
  );
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
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ values, isValid }) => (
          <Form className={s.form}>
            <h2 className={s.title}>{t('statistics.result')}</h2>
            <div className={s.resultsWrapper}>
              <div className={s.wrapper}>
                <div className={s.fieldWrapper}>
                  <label className={s.name}>{t('statistics.date')}</label>
                  <DatePickerField
                    name="date"
                    className={s.input}
                    minDate={new Date(startDate)}
                    maxDate={new Date()}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Choose date"
                    autoComplete="off"
                    readonly={true}
                    required
                  />

                  <svg className={s.iconSvg} style={{ width: '24px' }}>
                    <use href={`${sprite}#icon-Polygon`}></use>
                  </svg>
                </div>
                <div className={s.fieldWrapper}>
                  <label className={s.name}>
                    {t('statistics.amountPages')}
                  </label>

                  <Field className={s.input} type="number" name="pages" />
                  <span className={s.error}>
                    <ErrorMessage name="pages" />
                  </span>
                </div>
              </div>
              <div className={s.button}>
                <Button
                  type="submit"
                  disabled={!isValid || isTrainingExecuted}
                  className="main"
                  text={t('statistics.addResult')}
                />
              </div>
            </div>
            <h2 className={s.statisticsTitle}>{t('statistics.statistics')}</h2>
            <ul className={s.statistics}>
              {sortResults.map(({ pageAmount, dateTime }, index) => (
                <li className={s.item} key={index}>
                  <p className={s.day}>
                    {new Date(dateTime).toLocaleDateString()}
                  </p>
                  <p className={s.time}>
                    {new Date(dateTime).toLocaleTimeString()}
                  </p>
                  <p>
                    {pageAmount}
                    <span className={s.pages}>{t('statistics.pages')}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Form>
        )}
      </Formik>
      <DoingFineModal open={doingFineModal} onClose={closeDoingFineModal} />
    </>
  );
};

AddResult.propTypes = {
  data: PropTypes.shape({
    readStatistics: PropTypes.arrayOf(PropTypes.object),
    goalPerDay: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    finishDate: PropTypes.string.isRequired,
  }),
  isTrainingExecuted: PropTypes.bool,
  updateResult: PropTypes.func.isRequired,
};

export default AddResult;
