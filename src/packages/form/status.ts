import { FormikErrors, FormikHelpers } from 'formik';

/**
 * Formik status
 */
type FormikStatus<T = any> = {
  /**
   * Form disabled status
   */
  disabled: boolean;
  /*
   * Form outer errors
   */
  errors: FormikErrors<T>;
};

/**
 * Set formik status according format
 */
const setFormikStatus = <V = any>(
  setStatus: FormikHelpers<V>['setStatus'],
  status: Partial<FormikStatus>
) => setStatus(status);

export { FormikStatus, setFormikStatus };
