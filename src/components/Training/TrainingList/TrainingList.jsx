import s from './TrainingList.module.css';
import sprite from './sprite.svg';
import useIsMobile from '../../../helpers/useIsMobile';

const TrainingList = ({
  trainingBooks,
  isActiveTraining,
  deleteBookFromList,
}) => {
  const isMobile = useIsMobile();
  const headerList = ['Title', 'Author', 'Year', 'Pages'];
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
        {trainingBooks?.map(
          (
            {
              _id: id,
              bookTitle: title,
              author,
              amountOfPages: pages,
              publicationDate: year,
            },
            index
          ) => (
            <li className={s.item} key={index}>
              <svg className={s.icon} width="22" height="17">
                <use href={`${sprite}#icon-grey-book`}></use>
              </svg>

              <p className={s.title}>{title}</p>
              <p>
                {isMobile && <span className={s.subtitle}>Author:</span>}
                {author}
              </p>
              <p>
                {isMobile && <span className={s.subtitle}>Year:</span>}
                {year}
              </p>
              <p>
                {isMobile && <span className={s.subtitle}>Pages:</span>}
                {pages}
              </p>

              <svg
                type="button"
                id="delete_button"
                onClick={() => {
                  deleteBookFromList(id);
                }}
                className={s.icon}
                width="22"
                height="17"
              >
                <use href={`${sprite}#icon-delete`}
                className={s.deleteIcon}></use>
              </svg>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TrainingList;
