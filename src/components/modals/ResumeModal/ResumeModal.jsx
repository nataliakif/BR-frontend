import { useState } from 'react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';

import { useEditBookMutation } from '../../../redux/books/booksApi';

import s from './ResumeModal.module.css';

const MyInput = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

const ResumeModal = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [openedBook, setOpenedBook] = useState();

  const [editBook] = useEditBookMutation();

  const onHandleModalOpen = () => {
    setOpen(true);
    setOpenedBook(row.row.original);
  };
  const onHandleModalClose = () => {
    setOpen(false);
    setOpenedBook({});
  };

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
                const {
                  _id,
                  bookTitle,
                  author,
                  publicationDate,
                  amountOfPages,
                  review,
                  rating,
                } = openedBook;
                editBook({
                  id: _id,
                  bookTitle,
                  author,
                  publicationDate,
                  amountOfPages,
                  review,
                  rating,
                });

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
                      setOpenedBook({ ...openedBook, rating: newValue });
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
                    onChange={e => {
                      setOpenedBook({ ...openedBook, review: e.target.value });
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
};

export default ResumeModal;
