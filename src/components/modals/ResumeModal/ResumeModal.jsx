import { useState } from 'react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
// import RatingControlled from 'components/RatingControlled';
import { useEditBookMutation } from '../../../redux/books/booksApi';

import s from './ResumeModal.module.css';

const MyInput = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

const  ResumeModal=({ row })=> {
  const [open, setOpen] = useState(false);
  const [openedBook, setOpenedBook] = useState();
  // const [value, setValue] = useState(null);
  const [editBook] = useEditBookMutation();

  const onHandleModalOpen = () => {
    setOpen(true);
    setOpenedBook(row.row.original);
    // setValue(row.row.original.rating)
  };
  const onHandleModalClose = () => {
    setOpen(false);
    setOpenedBook({});
  };

  // console.log(openedBook);
  return (
    <div className={s.buttonWrapper}>
      <button className={s.buttonOpen} onClick={onHandleModalOpen}>
        Resume
      </button>
      <Modal
        open={open}
        onClose={onHandleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={s.box}>
          <Box>
            <h3 className={s.title}>Choose rating of the book</h3>
            <Formik
              initialValues={{
                rating: 2,
              }}
              onSubmit={values => {
                // const changedBook = {
                //   id: openedBook._id,
                //   rating: values.rating,
                //   review: values.review,
                // };
                // console.log(values)
                console.log(openedBook);
                // console.log(openedBook.rating, openedBook.review );
                editBook({ id: openedBook._id, rating: openedBook.rating, review: openedBook.review });
                // setValue(null)
                setOpen(false);

              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form>
                  <Rating
                    name="rating"
                    value={openedBook.rating}
                    size="small"
                    onChange={(event, newValue) => {
                      // setValue(newValue);
                      setOpenedBook({...openedBook, rating:newValue})
                      console.log(newValue);
                      // console.log('change', newValue);
                    }}
                    precision={1}
                  />
                  <p className={s.titleTextarea}>Resume</p>
                  <Field
                    value={openedBook.review}
                    name="review"
                    placeholder="..."
                    className={s.textAreaBox}
                    component={MyInput}
                    onChange={(event, newValue) => {
                      setOpenedBook({ ...openedBook, review: newValue })
                      console.log(newValue)

                    }}
                  />

                  <ul className={s.buttonList}>
                    <li>
                      <button
                        className={s.buttonBack}
                        type="submit"
                        onClick={onHandleModalClose}
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
