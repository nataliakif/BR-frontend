import PropTypes from 'prop-types';
import s from './GoingToReadMobile.module.css';
import { useTranslation } from 'react-i18next';

const GoingToReadMobile = ({ goingToReadListBooks }) => {
  const { t } = useTranslation();
  return (
    <section className={s.goingToReadMobilesection}>
      <h2 className={s.title}>{t('library.going')}</h2>
      <ul className={s.card}>
        {goingToReadListBooks.map(
          ({ _id, bookTitle, author, publicationDate, amountOfPages }) => {
            return (
              <li className={s.cardBook} key={_id}>
                <div className={s.cardBookWrapper}>
                  <h3 className={s.cardTitle}>{bookTitle}</h3>

                  <table className={s.cardTable}>
                    <tbody>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>{t('library.author')}:</th>
                        <td className={s.tableContent}>{author}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>{t('library.year')}:</th>
                        <td className={s.tableContent}>{publicationDate}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>{t('library.pages')}:</th>

                        <td className={s.tableContent}>{amountOfPages}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

GoingToReadMobile.propTypes = {
  goingToReadListBooks: PropTypes.arrayOf(
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
  ).isRequired,
};

export default GoingToReadMobile;
