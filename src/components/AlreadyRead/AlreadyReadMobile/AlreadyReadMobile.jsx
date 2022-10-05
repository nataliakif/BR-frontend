import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import ResumeModal from 'components/modals/ResumeModal';
import s from './AlreadyReadMobile.module.css';
import { useTranslation } from 'react-i18next';
import { useEditBookMutation } from 'redux/books/booksApi';

const AlreadyReadMobile = ({ alreadyReadListBooks }) => {
  const [editBook] = useEditBookMutation();
  const { t } = useTranslation();

  return (
    <section className={s.listAlreadyRead}>
      <h2 className={s.title}>{t('library.already')}</h2>
      <ul className={s.card}>
        {alreadyReadListBooks.map(
          ({
            _id,
            bookTitle,
            author,
            publicationDate,
            amountOfPages,
            review,
            rating,
          }) => {
            const book = {
              _id,
              bookTitle,
              author,
              publicationDate,
              amountOfPages,
              review,
              rating,
            };
            return (
              <li className={s.cardBook} key={_id}>
                <div className={s.cardBookWrapper}>
                  <h3 className={s.cardTitle}>{bookTitle}</h3>
                  <div className={s.cardTableBook}>
                    <table className={s.cardTable}>
                      <tbody>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>
                            {t('library.author')}:
                          </th>
                          <td className={s.tableContent}>{author}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>{t('library.year')}:</th>
                          <td className={s.tableContent}>{publicationDate}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>
                            {t('library.pages')}:
                          </th>
                          <td className={s.tableContent}>{amountOfPages}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>
                            {t('library.rating')}:
                          </th>
                          <td className={s.tableContent}>
                            <Rating
                              name="simple-controlled"
                              value={rating}
                              size="small"
                              readOnly
                              precision={0.5}
                              onChange={(event, newValue) => {
                                editBook({
                                  id: _id,
                                  bookTitle,
                                  author,
                                  publicationDate,
                                  amountOfPages,
                                  review,
                                  rating: newValue,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={s.buttonWrapper}>
                  <ResumeModal row={book} />
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

AlreadyReadMobile.propTypes = {
  alreadyReadListBooks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationDate: PropTypes.number.isRequired,
      amountOfPages: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      rating: PropTypes.number,
      review: PropTypes.string,
    })
  ),
};

export default AlreadyReadMobile;
