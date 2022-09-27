import books from '../../../dataFiles/book.json';

import s from './GoingToReadMobile.module.css';


const readingNowBooks = books.filter(book => book.status === 'Reading now');


function ReadingNowMobile() {
  return (
    <section className={s.listGoingRead}>
      
    <h2 className={s.title}>Going to read </h2>
      <ul className={s.card}>
        {readingNowBooks.map(({ id, title, author, year, pages }) => {
          return (
            <li className={s.cardBook} key={id}>
                <h3 className={s.cardTitle}>{title}</h3>
                <div className={s.cardTableBook}>
                <table className={s.cardTable}>
                  <tbody >
                    <tr className={s.cardTableBody}>
                      <th className={s.tableTitle} >Author:</th>
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
                  </tbody>
                </table>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ReadingNowMobile;
