import { useState } from 'react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import { useFormik } from 'formik';
import RatingControlled from 'components/RatingControlled';

import s from './ResumeModal.module.css';

 const MyInput = ({ field, form, ...props }) => {
   return <textarea {...field} {...props} />;
 };

function ResumeModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const onChangeRaring = () => {
  //   console.log('first');
  // };

  return (
    <div className={s.buttonWrapper}>
      <button className={s.buttonOpen} onClick={handleOpen}>
        Resume
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={s.box}>
          <Box>
            <h3 className={s.title}>Choose rating of the book</h3>
            <Formik
              initialValues={{
                rating: 2,
                text: '',
              }}
              onSubmit={values => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form>
                  <RatingControlled step={1} />
                  <p className={s.titleTextarea}>Resume</p>
                  {/* <TextField name="text" className={s.textAreaBox} /> */}
                  <Field name="lastName" placeholder="..."  className={s.textAreaBox} component={MyInput} />
                  {/* {errors.rating && touched.rating && <div>{errors.rating}</div>} */}

                  {/* <Field name="lastName">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <textarea type="text" placeholder="..." {...field} className={s.textAreaBox}/>
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                    )}
                  </Field> */}


                  <ul className={s.buttonList}>
                    <li>
                      <button
                        className={s.buttonBack}
                        type="submit"
                        onClick={handleClose}
                      >
                        Back
                      </button>
                    </li>
                    <li>
                      <button className={s.buttonSave} type="submit">
                        Save
                      </button>
                    </li>
                  </ul>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default ResumeModal;
