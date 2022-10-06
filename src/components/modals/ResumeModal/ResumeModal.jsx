import { useState } from 'react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { useEditBookMutation } from '../../../redux/books/booksApi';
import s from './ResumeModal.module.css';

const MyInput = ({ field, ...props }) => {
  return <textarea {...field} {...props} />;
};

const ResumeModal = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [openedBook, setOpenedBook] = useState();
  const [textArea, setTextArea] = useState('textAreaEmpty');

  const { t } = useTranslation();
  const [editBook] = useEditBookMutation();

  const onHandleModalOpen = () => {
    setOpen(true);
    setOpenedBook(row);
  };
  const onHandleModalClose = () => {
    setOpen(false);
    setOpenedBook({});
  };

  return (
    <div className={s.buttonWrapper}>
      <button className={s.buttonOpen} onClick={onHandleModalOpen}>
        {t('library.resume')}
      </button>
      <Modal
        open={open}
        onClose={onHandleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={s.box}>
          <Box>
            <h3 className={s.title}>{t('library.choose')}</h3>
            <Formik
              initialValues={{
                rating: 2,
              }}
              onSubmit={values => {
                editBook({
                  ...openedBook,
                  id: openedBook._id,
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
                  <p className={s.titleTextarea}>{t('library.resume')}</p>
                  <Field
                    value={openedBook.review}
                    name="review"
                    maxLength="1000"
                    placeholder="..."
                    className={s[textArea]}
                    component={MyInput}
                    onChange={e => {
                      e.preventDefault();
                      setTextArea(
                        !!e.target.value ? 'textAreaFilled' : 'textAreaEmpty'
                      );
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
                        {t('modal.back')}
                      </button>
                    </li>
                    <li>
                      <button
                        className={s.buttonSave}
                        type="submit"
                        tabIndex={0}
                        autoFocus={true}
                      >
                        {t('library.save')}
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

MyInput.propTypes = {
  field: PropTypes.object,
  props: PropTypes.object,
};

ResumeModal.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    bookTitle: PropTypes.string,
    author: PropTypes.string,
    publicationDate: PropTypes.number,
    amountOfPages: PropTypes.number,
    status: PropTypes.string,
    rating: PropTypes.number,
    review: PropTypes.string,
  }),
};

export default ResumeModal;
