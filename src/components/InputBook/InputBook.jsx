import React from 'react';
import { Field, Form, Formik, ErrorMessage } from "formik";
import s from './InputBook.module.css';
import InputAddSchema from './ErrorInput';


const initialValues =
{
    title: "",
    author: "",
    publishYear: "",
    pagesTotal: "",
}

function InputBook() {
    const handleSubmit = (value, { resetForm }) => {
        resetForm();
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={InputAddSchema}
                onSubmit={handleSubmit}>

                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className={s.form} action="submit">
                        <div className={s.form__container}>
                            <label className={s.label}>
                                Book title
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
                                Author
                                <Field
                                    id="author"
                                    className={s.author}
                                    type="text"
                                    name="author"
                                    autoComplete="off"
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
                                Publication date
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
                                />
                                <ErrorMessage
                                    component="div"
                                    name="publishYear"
                                    className={s.bookError}
                                />
                            </label>

                            <label className={s.label}>
                                Amount of page
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

                        <button className={s.button} type="submit">
                            Add
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default InputBook;
