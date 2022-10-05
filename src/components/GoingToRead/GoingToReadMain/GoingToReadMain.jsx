import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import stringMax from 'helpers/stringMax';
import s from './GoingToReadMain.module.css';
import sprite from '../../../images/sprite.svg';

const GoingToReadMain = ({ goingToReadListBooks }) => {
  const { t } = useTranslation();
  const data = goingToReadListBooks;
  const columnHelper = createColumnHelper(goingToReadListBooks);

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
            <div className={s.titleBook}>{stringMax(info.getValue(), 77)}</div>
          </div>
        </i>
      ),
      header: () => (
        <div>
          <span>{t('library.bookTitle')}</span>
        </div>
      ),
    }),
    columnHelper.accessor('author', {
      id: 'author',
      cell: info => info.getValue(),
      header: () => <span>{t('library.author')}</span>,
    }),
    columnHelper.accessor('publicationDate', {
      header: () => <span>{t('library.year')}</span>,
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('amountOfPages', {
      cell: info => info.getValue(),
      header: () => <span>{t('library.pages')}</span>,
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <h2 className={s.title}>{t('library.going')}</h2>
      <div>
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
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className={s.tablerow}>
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

GoingToReadMain.propTypes = {
  goingToReadListBooks: PropTypes.arrayOf(
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

export default GoingToReadMain;
