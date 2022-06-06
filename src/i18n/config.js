import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Ja from './ja.json';
import En from './en.json';

const resources = {
  ja: {
    translation: Ja
  },
  en {
    translation: En
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;