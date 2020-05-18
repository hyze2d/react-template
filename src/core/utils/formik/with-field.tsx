import { useFormikContext } from 'formik';
import * as React from 'react';
import { get } from 'object-path';
import { useCallback } from 'react';
import { FormikStatus } from './status';
import { ComponentType } from 'enzyme';

/**
 * Field props
 */
type Props = {
  value?: any;
  error?: any;
  isError?: any;
  onTouch?: any;
  onChange?: any;
  touched?: any;
  disabled?: any;
};

/**
 * Use field props
 */
const useFieldProps = (name: string) => {
  const {
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
    touched,
    submitCount,
    ...formik
  } = useFormikContext<any>();
  const status: FormikStatus = formik.status;
  const statusError = get(status, 'errors' + '.' + name);
  const error = get(errors, name) || statusError;
  const isError = submitCount > 0 && error != undefined && error != null;
  const value = get(values, name);
  const onChange = useCallback(
    value => {
      setFieldValue(name, value);
    },
    [setFieldValue, name, value]
  );
  const onTouch = useCallback(
    (touched = true) => {
      setFieldTouched(name, touched);
    },
    [name, setFieldTouched]
  );

  return {
    value,
    error,
    isError,
    status,
    onChange,
    onTouch,
    touched,
    isSubmitting
  };
};

/**
 * Wrap component with field data provided
 */
function withField<P extends Props>(source: ComponentType<P>) {
  const Result: any = source;
  const result: React.FC<{ name: string }> = props => {
    const {
      value,
      error,
      isError,
      onChange,
      onTouch,
      touched,
      isSubmitting,
      status
    } = useFieldProps(props.name);

    return (
      <Result
        value={value}
        error={error}
        isError={isError}
        onTouch={onTouch}
        onChange={onChange}
        touched={get(touched, name)}
        disabled={isSubmitting || get(status, 'disabled')}
        {...props}
      />
    );
  };

  return (result as any) as ComponentType<
    { name: string } & Omit<P, keyof Props> & Partial<Pick<P, keyof Props>>
  >;
}

export { withField, useFieldProps };
