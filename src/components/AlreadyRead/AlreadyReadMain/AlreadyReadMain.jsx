import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import PropTypes from 'prop-types';

import ResumeModal from '../../modals/ResumeModal/ResumeModal';
import sprite from '../../../images/sprite.svg';
import s from '../AlreadyReadMain/AlreadyReadMain.module.css';
import stringMax from 'helpers/stringMax';
import RatingControlled from '../../RatingControlled';
const AlreadyReadMain = ({ alreadyReadListBooks }) => {
  const data = alreadyReadListBooks;
  const columnHelper = createColumnHelper(alreadyReadListBooks);

  const columns = [
    columnHelper.accessor('bookTitle', {
      cell: info => (
        <i>
          <div className={s.titleBookWrapper}>
            <div className={s.iconWrapper}>
              <svg className={s.icon} width="22" height="17">
                <use href={sprite + '#icon-open-book'} />{' '}
              </svg>
            </div>
            <div className={s.titleBook}>{stringMax(info.getValue(), 25)}</div>
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
    columnHelper.accessor('publicationDate', {
      header: () => <span>Year</span>,
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('amountOfPages', {
      cell: info => info.getValue(),
      header: () => <span>Pages</span>,
    }),
    columnHelper.accessor('rating', {
      cell: row => (
        <i>
          <RatingControlled step={0.5} openedBook={row.row.original} />
        </i>
      ),
      header: 'Rating',
    }),
    columnHelper.accessor('action', {
      cell: row => (
        <i>
          <ResumeModal row={row.row.original} />
        </i>
      ),
      header: '',
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h2 className={s.title}>Already read</h2>

      <div>
        <table className={s.table}>
          <colgroup>
            <col span="1" className={s.styleTitleBook} />
            <col span="1" className={s.styleAuthor} />
            <col span="2" className={s.styleColums} />
            <col span="1" className={s.styleRating} />
            <col span="1" className={s.styleResume} />
          </colgroup>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
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
              <tr key={row.id} className={s.tableRow}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div />
      </div>
    </>
  );
};
AlreadyReadMain.propTypes = {
  alreadyReadListBooks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationDate: PropTypes.number.isRequired,
      amountOfPages: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      rating: PropTypes.number,
      review: PropTypes.string,
    })
  ),
};

export default AlreadyReadMain;
