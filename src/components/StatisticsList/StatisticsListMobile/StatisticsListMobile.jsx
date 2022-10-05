import PropTypes from 'prop-types';

import Checkbox from '@mui/material/Checkbox';
import s from './StatisticsListMobile.module.css';
import { grey, orange } from '@mui/material/colors';

const StatisticsListMobile = ({ books }) => {
  return (
    <>
      <section className={s.booksMobilesection}>
        {/* <h2 className={s.title}>Going to read </h2> */}
        <ul className={s.card}>
          {books?.map(
            ({
              _id,
              bookTitle,
              author,
              alreadyFinished,
              amountOfPages,
              publicationDate,
            }) => {
              return (
                <li className={s.cardBook} key={_id}>
                  <div className={s.checkBoxWrapper}>
                    <Checkbox
                      checked={alreadyFinished}
                      name={_id}
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 15 },
                        color: grey[500],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                    />
                  </div>
                  <div className={s.cardBookWrapper}>
                    <h3 className={s.cardTitle}>{bookTitle}</h3>

                    <table className={s.cardTable}>
                      <tbody>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Author:</th>
                          <td className={s.tableContent}>{author}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Year:</th>
                          <td className={s.tableContent}>{publicationDate}</td>
                        </tr>
                        <tr className={s.cardTableBody}>
                          <th className={s.tableTitle}>Pages:</th>
                          <td className={s.tableContent}>{amountOfPages}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </>
  );
};

StatisticsListMobile.propTypes = {
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
  ).isRequired,
};

export default StatisticsListMobile;
