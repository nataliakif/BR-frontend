import s from './StatisticsList.module.css';
import Checkbox from '@mui/material/Checkbox';

const StatisticsList = ({ books }) => {
  const headerList = ['Title', 'Author', 'Year', 'Pages'];

  const handleChange = event => {
    alert('Меняем статус книги на Прочитано');
  };
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
            status,
            amountOfPages: pages,
            publicationDate: date,
          }) => (
            <li className={s.item} key={id}>
              <div className={s.title}>
                <Checkbox
                  checked={status === 'finished' ?? false}
                  onChange={handleChange}
                  name={id}
                />
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

export default StatisticsList;
