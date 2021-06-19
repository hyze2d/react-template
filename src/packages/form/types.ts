import { FormikHelpers } from 'formik';

/**
 * Formik submit handler
 */
type OnSubmit<V> = (values: V, helpers: FormikHelpers<V>) => any;

export { OnSubmit };
