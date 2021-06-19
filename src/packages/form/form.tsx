import * as React from 'react';
import { FormikContext, FormikProps } from 'formik';

/**
 * Form
 */
const Form: React.FC<{
  formRef?: any;
  use: FormikProps<any>;
}> = ({ use, children }) => (
  <FormikContext.Provider value={use}>{children}</FormikContext.Provider>
);

export { Form };
