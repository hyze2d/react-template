import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setLocale } from './yup';

/**
 * Setup localization
 */
const init = async () => {
  await i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    ns: ['common'],
    resources: {
      en: {
        common: require('./locales/en.json')
      }
    },
    defaultNS: 'common',
    react: {
      bindI18n: 'languageChanged loaded added'
    },
    interpolation: {
      escapeValue: false
    }
  });

  setLocale();
};

export { init };
