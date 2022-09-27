import books from '../../../dataFiles/book.json';
import sprite from '../../../images/sprite.svg';
import EllipsisText from 'react-ellipsis-text';
import s from "./GoingToReadMain.module.css"

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

// const readingNowBooks = books.filter(book => book.status === 'Reading now');
// console.log(readingNowBooks);


const readingNowBooks = books.filter(book => book.status === "Going to read");

const columnHelper = createColumnHelper(readingNowBooks);

const columns = [
  columnHelper.accessor('title', {
    cell: info => (
      <i>
        <div >
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
];

function GoingToReadMain() {

    const data=readingNowBooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h2 className={s.title}>Going to read </h2>
      {/* {!readingNowBooks && ( */}
      <div>
        <table className={s.table}>
          {/* <capture className={s.title}>Going to read</capture> */}
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} >
                {headerGroup.headers.map(header => (
                  <th key={header.id} className={s.tableTitleCell}>
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
              <tr key={row.id} className={s.tablerow}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id} className={s.tablerow}>
                {footerGroup.headers.map(header => (
                  <th key={header.id} className={s.tableTitleCell}>
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
      </div>
      {/* )} */}
    </>
  );
}

export default GoingToReadMain;
