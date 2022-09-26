import books from '../../dataFiles/book.json';
import sprite from '../../images/sprite.svg';
// import EllipsisText from 'react-ellipsis-text';
// import { useState } from 'react';

import s from './GoingToRead.module.css';
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from '@tanstack/react-table';
// import s from "./GoingToRead.module.css"

// const readingNowBooks = books.filter(book => book.status === 'Reading now');
// console.log(readingNowBooks);

const readingNowBooks = books.filter(book => {
  const readPages = +book.read;
  const pagesOfBook = +book.pages;

  return readPages < pagesOfBook && readPages >= 1;
});

function GoingToRead() {
  return (
    <>
      <ul>
        {readingNowBooks.map(({ id, title, author, year, pages }) => {
          return (
            <li className={s.cardBook} key={id}>
              <div className={s.cardTitleBook}>
                <div>
                  <svg className="icon" width="22" height="17">
                    <use href={sprite + '#icon-open-book'} />{' '}
                  </svg>
                </div>
                <p className={s.cardTitle}>{title}</p></div>
                <div className={s.cardTableBook}>
                <table>
                  <tbody>
                    <tr>
                      <th>Author</th>
                      <td>{author}</td>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>{year}</td>
                    </tr>
                    <tr>
                      <th>Pages</th>
                      <td>{pages}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default GoingToRead;
