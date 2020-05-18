import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import * as immutable from 'object-path-immutable';

/**
 * Load translation
 */
const useTranslationSource = (name, translations) => {
  const result = useTranslation();

  useEffect(() => {
    Object.entries(translations).map(([key, value]) => {
      result.i18n.addResourceBundle(
        key,
        'common',
        immutable.set({}, name, value)
      );
    });

    result.i18n.emit('added');
  }, []);

  return result;
};

export { useTranslationSource };
