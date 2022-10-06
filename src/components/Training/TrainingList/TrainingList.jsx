import s from './TrainingList.module.css';
import sprite from './sprite.svg';
import { useTranslation } from 'react-i18next';

const TrainingList = ({
  trainingBooks,
  isActiveTraining,
  deleteBookFromList,
}) => {
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
              <svg className={s.icon_book} width="22" height="17">
                <use href={`${sprite}#icon-grey-book`}></use>
              </svg>
              <p className={s.title}>{title}</p>
              <p>{author}</p>
              <p>{year}</p>
              <p>{pages}</p>

              <svg
                type="button"
                id="delete_button"
                onClick={() => {
                  deleteBookFromList(id);
                }}
                className={s.icon_delete}
                width="22"
                height="17"
              >
                <use href={`${sprite}#icon-delete`}></use>
              </svg>
            </li>
          )
        )}
        <li className={s.plug}>
          <svg className={s.icon} width="22" height="17">
            <use href={`${sprite}#icon-grey-book`}></use>
          </svg>
          <p>...</p>
        </li>
      </ul>
    </div>
  );
};

export default TrainingList;
