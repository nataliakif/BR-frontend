import Checkbox from '@mui/material/Checkbox';
import { grey, orange } from '@mui/material/colors';
import PropTypes from 'prop-types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import stringMax from 'helpers/stringMax';
import s from './StatisticsList.module.css';

const StatisticsList = ({ books }) => {
  const data = books;
  const columnHelper = createColumnHelper(books);

  const columns = [
    columnHelper.accessor('bookTitle', {
      cell: info => (
        <i>
          <div className={s.titleBookWrapper}>
                <div className={s.checkBoxWrapper}>
                  <Checkbox
                    checked={books.alreadyFinished}
                    name={books._id}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 15 },
                        color: grey[500],
                      '&.Mui-checked': {
                        color: orange[800],
                      },
                    }}
                  />
                </div>
            <div className={s.titleBook}>{stringMax(info.getValue(), 50)}</div>
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
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className={s.tableBox}>
        <table className={s.table}>
          <colgroup>
            <col span="1" className={s.styleTitleBook} />
            <col span="1" className={s.styleAuthor} />
            <col span="2" className={s.styleColums} />
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
          <tbody className={s.tableTBody}>
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

StatisticsList.propTypes = {
  books: PropTypes.arrayOf(
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
  )
};


export default StatisticsList;
