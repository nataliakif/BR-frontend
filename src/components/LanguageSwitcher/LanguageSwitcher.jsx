import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLang, getLang } from 'redux/authUser/authUserSlice';
import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';
import s from './LanguageSwitcher.module.css';

const LANGUAGES = ['ua', 'en', 'pl'];

const LanguageSwitcher = ({ isLoggedIn }) => {
  const currentLang = useSelector(getLang);
  const [language, setLanguage] = useState(currentLang);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const classLang = isLoggedIn ? 'langIsLoggedIn' : 'lang';

  useEffect(() => {
    currentLang && i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <div className={s[classLang]}>
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

LanguageSwitcher.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default LanguageSwitcher;
