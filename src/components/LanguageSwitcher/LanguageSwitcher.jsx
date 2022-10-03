import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang, getLang } from 'redux/authUser/authUserSlice';
import sprite from '../../images/sprite.svg';
import s from './LanguageSwitcher.module.css';

const LANGUAGES = ['ua', 'en', 'pl'];

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLang = useSelector(getLang);
  console.log(currentLang);

  useEffect(() => {
    currentLang && i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <div className={s.lang}>
      <svg className={s.currentFlag} width="21" height="14">
        <use href={sprite + '#flag-' + language}></use>
      </svg>

      <ul className={s.langSite}>
        {LANGUAGES.map(lang => (
          <li
            onClick={() => {
              setLanguage(lang);
              i18n.changeLanguage(lang);
              dispatch(setLang(lang));
            }}
            className={s.langSite__item}
            key={lang}
          >
            <div className={s.langSite__linkOther}>
              <svg width="21" height="14">
                <use href={sprite + '#flag-' + lang}></use>
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
