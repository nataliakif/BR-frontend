// import books from '../../../dataFiles/book.json';

import s from './ReadingNowMobile.module.css';

// const readingNowBooks = books.filter(book => book.status === 'reading_now');

const ReadingNowMobile = ({readingNowListBooks}) => {
  return (
    <section className={s.readingNowMobileSection}>
      <h2 className={s.title}>Reading now</h2>
      <ul className={s.card}>
        {readingNowListBooks.map(({ _id, bookTitle, author, publicationDate, amountOfPages }) => {
          return (
            <li className={s.cardBook} key={_id}>
              <div className={s.cardBookWrapper}>
                <h3 className={s.cardTitle}>{bookTitle}</h3>

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
                  </tbody>
                </table>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ReadingNowMobile;
