import ResumeModal from 'components/modals/ResumeModal';
// import RatingControlled from 'components/RatingControlled';
// import books from '../../../dataFiles/book.json';
import Rating from '@mui/material/Rating';
import s from './AlreadyReadMobile.module.css';

// const alreadyReadListBooks = books.filter(book => book.status === 'finished');

const AlreadyReadMobile = ({ alreadyReadListBooks }) => {
  return (
    <section className={s.listAlreadyRead}>
      <h2 className={s.title}>Already read</h2>
      <ul className={s.card}>
        {alreadyReadListBooks.map(
          ({
            _id,
            bookTitle,
            author,
            publicationDate,
            amountOfPages,
            rating,
          }) => {
            return (
              <li className={s.cardBook} key={_id}>
                <div className={s.cardBookWrapper}>
                  <h3 className={s.cardTitle}>{bookTitle}</h3>
                  <div className={s.cardTableBook}>
                    <table className={s.cardTable}>
                      <tbody>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Author:</th>
                          <td className={s.tableContent}>{author}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Year:</th>
                          <td className={s.tableContent}>{publicationDate}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Pages:</th>
                          <td className={s.tableContent}>{amountOfPages}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Rating:</th>
                          <td className={s.tableContent}>
                            {/* <RatingControlled step={0.5} status={rating} /> */}
                            <Rating
                              name="read-only"
                              value={rating}
                              size="small"
                              readOnly
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={s.buttonWrapper}>
                  <ResumeModal />
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default AlreadyReadMobile;
