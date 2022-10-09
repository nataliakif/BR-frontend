import s from './TrainingMobileList.module.css';
import sprite from '../sprite.svg';
import { useTranslation } from 'react-i18next';

const TrainingMobileList = ({
  trainingBooks,
  isActiveTraining,
  deleteBookFromList,
}) => {
  const { t } = useTranslation();
  // console.log(trainingBooks.length);
  return (
    <div className={s.trainingWrapper}>
      <ul className={s.list}>
        {!trainingBooks.length && (
          <li className={s.list_item}>
            <div className={s.infoUp}>
              <p className={s.title}>
                <svg className={s.icon} width="22" height="17">
                  <use href={`${sprite}#icon-grey-book`}></use>
                </svg>
                ...
              </p>
            </div>
            <div className={s.info}>
              <p className={s.item}>
                <span className={s.subtitle}>{t('library.author')}:</span>
                ...
              </p>
              <p className={s.item}>
                <span className={s.subtitle}>{t('library.year')}:</span>
                ...
              </p>
              <p className={s.item}>
                <span className={s.subtitle}>{t('library.pages')}:</span>
                ...
              </p>
            </div>
          </li>
        )}
        {trainingBooks.map(
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
            <li className={s.list_item} key={index}>
              <div className={s.infoUp}>
                <p className={s.title}>
                  <svg className={s.icon} width="22" height="17">
                    <use href={`${sprite}#icon-grey-book`}></use>
                  </svg>
                  {title}
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
                  <use href={`${sprite}#icon-delete`}></use>
                </svg>
              </div>
              <div className={s.info}>
                <p className={s.item}>
                  <span className={s.subtitle}>{t('library.author')}:</span>

                  {author}
                </p>
                <p className={s.item}>
                  <span className={s.subtitle}>{t('library.year')}:</span>

                  {year}
                </p>
                <p className={s.item}>
                  <span className={s.subtitle}>{t('library.pages')}:</span>

                  {pages}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TrainingMobileList;
