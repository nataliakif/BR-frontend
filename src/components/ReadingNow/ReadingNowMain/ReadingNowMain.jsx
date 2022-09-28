import EllipsisText from 'react-ellipsis-text';
import s from "./ReadingNowMain.module.css"

import books from '../../../dataFiles/book.json';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const goingToReadBooks = books.filter(book => book.status === 'Reading now');
// console.log(goingToReadBooks);
const columnHelper = createColumnHelper(goingToReadBooks);

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

function ReadingNowMain() {
  const data = [...goingToReadBooks]
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h2 className={s.title}>Reading now</h2>
      {/* {!goingToReadBooks && ( */}
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
      {/* )} */}
    </>
  );
}

export default ReadingNowMain;
