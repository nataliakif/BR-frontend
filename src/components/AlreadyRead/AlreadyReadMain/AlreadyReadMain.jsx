// import { useState } from 'react';
import EllipsisText from 'react-ellipsis-text';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import RatingControlled from 'components/RatingControlled';
import ResumeModal from 'components/modals/ResumeModal';
import books from '../../../dataFiles/book.json';
import sprite from '../../../images/sprite.svg';
import s from "../AlreadyReadMain/AlreadyReadMain.module.css"

const alreadyReadBooks = books.filter(book => {
  const readPages = +book.read;
  const pagesOfBook = +book.pages;

  return readPages >= pagesOfBook;
});

const columnHelper = createColumnHelper(alreadyReadBooks);

const columns = [
  columnHelper.accessor('title', {
    cell: info => (
      <i>
        <div>
          <svg className="icon" width="22" height="17">
            <use href={sprite + '#icon-open-book'} />{' '}
          </svg>
        </div>
        <div>
          <EllipsisText text={info.getValue()} length={23} />
        </div>
      </i>
    ),
    header: () => (
      <div>
        <span>Book title</span>
      </div>
    ),
  }),
  columnHelper.accessor('author', {
    id: 'author',
    cell: info => info.getValue(),
    header: () => <span>Author</span>,
  }),
  columnHelper.accessor('year', {
    header: () => <span>Year</span>,
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('pages', {
    cell: info => info.getValue(),
    header: () => <span>Pages</span>,
  }),
  columnHelper.accessor('rating', {
    cell: info => (
      <div>
        <RatingControlled step={0.5} status={+info.getValue()} />
      </div>
    ),
    header: 'Rating',
  }),
  columnHelper.accessor('resume', {
    cell: () => (
      <i>
        <ResumeModal />
      </i>
    ),
    header: '',
  }),
];

function AlreadyReadMain() {
  const data = alreadyReadBooks;
  // setData(alreadyReadBooks);
  // console.log(data)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
{data && (<><h2>Already read</h2>

      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
      </div></>)}
    </>
  );
}

export default AlreadyReadMain;
