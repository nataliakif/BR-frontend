import EllipsisText from 'react-ellipsis-text';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import RatingControlled from 'components/RatingControlled';
import ResumeModal from 'components/modals/ResumeModal';

import s from "../AlreadyReadMain/AlreadyReadMain.module.css"

import books from '../../../dataFiles/book.json';

const alreadyReadBooks = books.filter(book => book.status === 'Already read');

const columnHelper = createColumnHelper(alreadyReadBooks);

const columns = [
  columnHelper.accessor('title', {
    cell: info => (
      <i>
        <div className={s.titleBookWrapper}>
        <div className={s.titleBook}>
          <EllipsisText text={info.getValue()} length={23} />
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
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
    <h2>Already read</h2>

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
        <div/>
      </div>
    </>
  );
}

export default AlreadyReadMain;
