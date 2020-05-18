import i18next from 'i18next';
import * as yup from 'yup';

/**
 * String map to func map
 */
const withTranslation = (source: { [x: string]: string | Function }) => {
  Object.entries(source).map(([key, value]) => {
    source[key] = ({ path, values, min, max, less, more }) =>
      i18next
        .t(<string>value)
        .replace(/\$\{path\}/gi, i18next.t(path))
        .replace(/\$\{values\}/gi, i18next.t(values))
        .replace(/\$\{min\}/gi, i18next.t(min))
        .replace(/\$\{max\}/gi, i18next.t(max))
        .replace(/\$\{less\}/gi, i18next.t(less))
        .replace(/\$\{more\}/gi, i18next.t(more));
  });

  return source;
};

/**
 * Set yup locale
 */
const setLocale = () => {
  yup.setLocale({
    mixed: withTranslation({
      required: 'yup.mixed.required',
      default: 'yup.mixed.default',
      oneOf: 'yup.mixed.oneOf',
      notOneOf: 'yup.mixed.notOneOf'
    }),
    string: withTranslation({
      length: 'yup.string.length',
      min: 'yup.string.min',
      max: 'yup.string.max',
      matches: 'yup.string.matches',
      email: 'yup.string.email',
      url: 'yup.string.url',
      trim: 'yup.string.trim',
      lowercase: 'yup.string.lowercase',
      uppercase: 'yup.string.uppercase'
    }),
    number: withTranslation({
      min: 'yup.number.min',
      max: 'yup.number.max',
      lessThan: 'yup.number.lessThan',
      moreThan: 'yup.number.moreThan',
      positive: 'yup.number.positive',
      negative: 'yup.number.negative',
      integer: 'yup.number.integer'
    }),
    date: withTranslation({
      min: 'yup.date.min',
      max: 'yup.date.max'
    }),
    array: withTranslation({
      min: 'yup.array.min',
      max: 'yup.array.max'
    })
  });
};

export { setLocale };
