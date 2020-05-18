import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useEffect } from 'react';

/**
 * Load translation
 */
const useDynamicTranslation = (factory, lang?) => {
  console.log(__dirname, __filename);

  const translations = factory();

  useEffect(() => {
    switch (true) {
      case Boolean(lang): {
        i18next.addResourceBundle(lang, 'all', translations);

        break;
      }

      default: {
        Object.entries(translations).map(([key, value]) => {
          i18next.addResourceBundle(key, 'all', value);
        });

        break;
      }
    }
  }, []);

  return useTranslation('all');
};

export { useDynamicTranslation };
