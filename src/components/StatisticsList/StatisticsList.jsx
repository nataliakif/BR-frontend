import s from './StatisticsList.module.css';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const StatisticsList = ({ books }) => {
  const { t } = useTranslation();
  const headerList = [
    t('library.title'),
    t('library.author'),
    t('library.year'),
    t('library.pages'),
  ];
  return (
    <div className={s.trainingWrapper}>
      <ul className={s.header}>
        {headerList.map(title => (
          <li className={s.header_item} key={title}>
            {title}
          </li>
        ))}
      </ul>
      <ul className={s.list}>
        {books?.map(
          ({
            _id: id,
            bookTitle: title,
            author,
            alreadyFinished,
            amountOfPages: pages,
            publicationDate: date,
          }) => (
            <li className={s.item} key={id}>
              <div className={s.title}>
                <Checkbox checked={alreadyFinished} name={id} />
                <p>{title}</p>
              </div>
              <p>{author}</p>
              <p>{date}</p>
              <p>{pages}</p>{' '}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
StatisticsList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      alreadyFinished: PropTypes.bool.isRequired,
      amountOfPages: PropTypes.number.isRequired,
      publicationDate: PropTypes.number.isRequired,
    })
  ),
};
export default StatisticsList;
