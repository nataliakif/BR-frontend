import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../dataFiles/locales/en/translation.json';
import translationUa from '../dataFiles/locales/ua/translation.json';
import translationPl from '../dataFiles/locales/pl/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ua: {
      translation: translationUa,
    },
    pl: {
      translation: translationPl,
    },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
