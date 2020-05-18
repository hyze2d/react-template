import * as immutable from 'object-path-immutable';
import * as React from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
/**
 * Translation context
 */
const TranslationsContext = createContext<{
  translations: any;
  lng: string;
  fallbackLng: string;
  setTranslations: (translations) => any;
}>(null);

/**
 * Translation provider
 */
const Provider: React.FC<{
  translations: any;
  lng: string;
  fallbackLng: string;
  onSet?: (locale: object, lng: string, translations: object) => any;
}> = ({ lng, onSet, children, fallbackLng, ...props }) => {
  const [translations, setTranslations] = useState(props.translations);

  useEffect(() => {
    if (onSet) onSet(translations[lng], lng, translations);
  }, [lng, translations]);

  return (
    <TranslationsContext.Provider
      value={{
        lng,
        fallbackLng,
        translations,
        setTranslations
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};

Provider.defaultProps = {
  translations: {}
};

/**
 * Params replacer
 */
const params = (source: string, vars: object) => source;

const loadedTranslations = [];

/**
 * Use translation
 */
const useTranslation = (
  name?: string,
  factory?: () => Promise<any>,
  lang?: string
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { translations, setTranslations, lng, fallbackLng } = useContext(
    TranslationsContext
  );

  useEffect(() => {
    if (!name || !factory || loadedTranslations.some(one => one == name)) {
      return;
    }

    setLoading(true);

    factory()
      .then(({ default: loaded }) => {
        loadedTranslations.push(name);

        switch (true) {
          case Boolean(lang): {
            setTranslations({
              ...translations,
              [lang]: {
                ...(translations[lang] || {}),
                [name]: loaded
              }
            });

            break;
          }

          default: {
            let result = {
              ...translations
            };

            Object.entries(loaded).map(([key, value]: any) => {
              result = immutable.set(result, key + '.' + name, value);
            });

            setTranslations(result);

            break;
          }
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const t = useCallback(
    (name: string) =>
      immutable.get(translations[lng], name) ||
      immutable.get(translations[fallbackLng], name) ||
      '',
    [lng, translations]
  );

  return {
    t,
    lng,
    error,
    params,
    loading
  };
};

export { Provider, useTranslation };
