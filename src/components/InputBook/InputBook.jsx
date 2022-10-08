import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import schema from './ErrorInput';
import { useCreateBookMutation } from 'redux/books/booksApi';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getLang } from 'redux/authUser/authUserSlice';
import PropTypes from 'prop-types';
import s from './InputBook.module.css';

const initialValues = {
  title: '',
  author: '',
  publishYear: '',
  pagesTotal: '',
};

function InputBook({ addedBookTitles }) {
  const currentLang = useSelector(getLang);
  const { t } = useTranslation();
  const [createBook] = useCreateBookMutation();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema(t, currentLang)}
      >
        {({ values, handleChange, handleBlur, resetForm, isValid }) => (
          <Form
            className={s.form}
            action="submit"
            onSubmit={e => {
              e.preventDefault();
              if (addedBookTitles.includes(values.title)) {
                toast.warning(`${t('toast.bookWarning')}${values.title}`);
                return;
              }
              createBook({
                bookTitle: values.title,
                author: values.author,
                publicationDate: values.publishYear,
                amountOfPages: values.pagesTotal,
              });
              toast.success(
                `${t('toast.addBook')}${values.title}${t(
                  'toast.addBookSuccess'
                )}`
              );
              resetForm();
            }}
          >
            <div className={s.form__container}>
              <label className={s.label}>
                {t('library.bookTitle')}
                <Field
                  id="title"
                  className={s.title}
                  type="text"
                  name="title"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  value={values.title}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="title"
                  className={s.bookError}
                />
              </label>
              <label className={s.label}>
                {t('library.author')}
                <Field
                  id="author"
                  className={s.author}
                  type="text"
                  name="author"
                  autoComplete="off"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  value={values.author}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="author"
                  className={s.bookError}
                />
              </label>
              <label className={s.label}>
                {t('library.publicationDate')}
                <Field
                  id="year"
                  className={s.yearPages}
                  type="number"
                  name="publishYear"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  value={values.publishYear}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="publishYear"
                  className={s.bookError}
                />
              </label>
              <label className={s.label}>
                {t('library.amount')}
                <Field
                  id="pages"
                  className={s.yearPages}
                  type="number"
                  name="pagesTotal"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  value={values.pagesTotal}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="pagesTotal"
                  className={s.bookError}
                />
              </label>
            </div>
            <button className={s.button} type="submit" disabled={!isValid}>
              {t('library.add')}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

InputBook.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publishYear: PropTypes.number,
  amountOfPages: PropTypes.number,
};

export default InputBook;
