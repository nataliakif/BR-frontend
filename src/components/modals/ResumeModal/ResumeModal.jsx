import { useState } from 'react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { useFormik } from 'formik';
import RatingControlled from 'components/RatingControlled';

import s from './ResumeModal.module.css';



function ResumeModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={s.button} onClick={handleOpen}>
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
                  <Field name="text" className={s.textAreaBox}  />
                  {errors.rating && touched.rating && <div>{errors.rating}</div>}

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
                      <button className={s.buttonSave} type="submit">Submit</button>
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
