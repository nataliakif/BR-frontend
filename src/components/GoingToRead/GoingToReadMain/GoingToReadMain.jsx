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

const readingNowBooks = books.filter(book => book.status === "Going to read");

const columnHelper = createColumnHelper(readingNowBooks);

const columns = [
  columnHelper.accessor('title', {
    cell: info => (
      <i>
        <div className={s.titleBookWrapper}>
        <div className={s.titleBook}>
          <EllipsisText text={info.getValue()} length={40} />
        </div>
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
        <table className={s.table} >
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
        </table>
        <div className="h-4" />
      </div>
    </>
  );
}

export default GoingToReadMain;
