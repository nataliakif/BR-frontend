
import React from 'react';
import { Formik } from "formik";
import s from './InputBook.module.css'

function InputBook() {
    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    author: "",
                    publishYear: "",
                    pagesTotal: "",


                }}>

                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={s.form} action="submit">
                        <div className={s.form__container}>
                            <label className={s.label}>
                                Book title
                                <input
                                    className={s.title}
                                    type="text"
                                    name="title"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="..."
                                    value={values.title}

                                />
                            </label>

                            <label className={s.label}>
                                Author
                                <input
                                    className={s.author}
                                    type="text"
                                    name="author"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="..."
                                    value={values.author}
                                />
                            </label>

                            <label className={s.label}>
                                Publication date
                                <input
                                    className={s.yearPages}
                                    type="number"
                                    name="publishYear"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="..."
                                    value={values.publishYear}
                                />
                            </label>

                            <label className={s.label}>
                                Amount of page
                                <input
                                    className={s.yearPages}
                                    type="number"
                                    name="pagesTotal"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="..."
                                    value={values.pagesTotal}

                                />
                            </label>
                        </div>

                        <button className={s.button} type="submit">
                            Add
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default InputBook;
