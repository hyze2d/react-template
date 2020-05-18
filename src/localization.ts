import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * Setup localization
 */
const init = () =>
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    ns: ['all'],
    defaultNS: 'all',
    interpolation: {
      escapeValue: false
    }
  });

export { init };
