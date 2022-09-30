import s from './AddResult.module.css';
// import DatePickerField from 'components/DatePickerField';
import Button from 'components/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePickerField from 'components/DatePicker';
const AddResult = () => {
  return (
    <>
      <Formik
        initialValues={{ date: new Date(), pages: '' }}
        // onSubmit={onSubmit}
        // validationSchema={schema(translation['AddPagesValidation'])}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Result</h2>
          <div className={s.wrapper}>
            <div className={s.fieldWrapper}>
              <p className={s.name}>Date</p>
              <DatePickerField name="date" />

              <svg className={s.iconSvg} style={{ width: '24px' }}>
                {/* <use href={`${spriteSvg}#icon-polygon`}></use> */}
              </svg>
            </div>
            <div className={s.fieldWrapper}>
              <p className={s.name}>Amount of pages</p>
              <Field className={s.input} type="number" name="pages" />
              <span className={s.error}>
                <ErrorMessage name="pages" />
              </span>
            </div>
            <Button
              // disabled={!isValid && !dirty}
              type="submit"
              className={s.button}
              text="AddResult"
            />
          </div>

          <h2 className={s.statisticsTitle}>STATISTICS</h2>
          {/* {!!sets && (
        <ul className={s.statistics}>
          {sets
            .slice(0)
            .reverse()
            .map(({ _id: id, pages, date }) => (
              <li className={s.item} key={id} id={id}>
                <span className={s.day}>
                  {dayjs(date).format(dateFormat.dayjs)}
                </span>
                <span className={s.data}>{dayjs(date).format('HH:mm:ss')}</span>
                <span className={s.pages}>
                  {pages} {t.pagesShort}
                </span>
              </li>
            ))}
        </ul>
      )} */}
        </Form>
      </Formik>
    </>
  );
};

export default AddResult;
