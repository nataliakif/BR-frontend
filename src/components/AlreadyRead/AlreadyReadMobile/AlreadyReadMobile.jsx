import ResumeModal from 'components/modals/ResumeModal';
import RatingControlled from 'components/RatingControlled';
import books from '../../../dataFiles/book.json';

import s from './AlreadyReadMobile.module.css';

const alreadyReadBooks = books.filter(book => book.status === 'Already read');

function AlreadyReadMobile() {
  return (
    <section className={s.listAlreadyRead}>
      <h2 className={s.title}>Already read</h2>
      <ul className={s.card}>
        {alreadyReadBooks.map(({ id, title, author, year, pages, rating }) => {
          return (
            <li className={s.cardBook} key={id}>
              <div className={s.cardBookWrapper}>
                <h3 className={s.cardTitle}>{title}</h3>
                <div className={s.cardTableBook}>
                  <table className={s.cardTable}>
                    <tbody>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>Author:</th>
                        <td className={s.tableContent}>{author}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>Year:</th>
                        <td className={s.tableContent}>{year}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>Pages:</th>
                        <td className={s.tableContent}>{pages}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>Rating:</th>
                        <td className={s.tableContent}>
                          <RatingControlled step={0.5} status={rating} />
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
        })}
      </ul>
    </section>
  );
}

export default AlreadyReadMobile;
