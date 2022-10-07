import Checkbox from '@mui/material/Checkbox';
import { grey, orange } from '@mui/material/colors';
import PropTypes from 'prop-types';
import s from './StatisticsListMobile.module.css';

const StatisticsListMobile = ({ books }) => {
  return (
    <>
      <section className={s.booksMobilesection}>
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
                      disabled
                      name={_id}
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 15 },
                        color: grey[500],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                      onClick={e => {
                        e.preventDefault();
                        return false;
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
