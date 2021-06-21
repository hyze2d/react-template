import * as React from 'react';
import { FormikContext, FormikProps } from 'formik';

/**
 * Form
 */
const Form: React.FC<
  React.HTMLAttributes<HTMLFormElement> & {
    html?: boolean;
    use: FormikProps<any>;
  }
> = ({ html, use, children, ...props }) => (
  <FormikContext.Provider value={use}>
    {html ? (
      <form onSubmit={use.handleSubmit} {...props}>
        {children}
      </form>
    ) : (
      children
    )}
  </FormikContext.Provider>
);

Form.defaultProps = {
  html: true
};

export { Form };
