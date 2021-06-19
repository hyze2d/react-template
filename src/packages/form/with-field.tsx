import * as React from 'react';
// import { ComponentType } from 'enzyme';
import { FormikStatus } from './status';
import { get } from 'object-path';
import { useCallback } from 'react';
import { useFormikContext } from 'formik';

type ComponentType<P> = React.ComponentClass<P> | React.FunctionComponent<P>;

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
const useFieldProps = (name: string, props: any) => {
  const {
    values,
    errors,
    touched,
    submitCount,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
    ...formik
  } = useFormikContext<any>();

  const status: FormikStatus = formik.status;
  const statusError = get(status, 'errors' + '.' + name);
  const error = get(errors, name) || statusError;
  const isError = submitCount > 0 && error != undefined && error != null;
  const value = get(values, name);
  const { hooks } = props as any;

  const onChange = useCallback(
    value => {
      setFieldValue(name, value);

      hooks?.change(value);
    },
    [setFieldValue, name, value, hooks?.change]
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
    status,
    isError,
    onTouch,
    touched,
    onChange,
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
      status,
      isError,
      onTouch,
      touched,
      onChange,
      isSubmitting
    } = useFieldProps(props.name, props);

    return (
      <Result
        value={value}
        error={error}
        isError={isError}
        onTouch={onTouch}
        onChange={onChange}
        touched={get(touched, props.name)}
        disabled={isSubmitting || get(status, 'disabled')}
        {...props}
      />
    );
  };

  return result as any as ComponentType<
    {
      name: string;
      hooks?: {
        change?: (value: any) => any;
      };
    } & Omit<P, keyof Props> &
      Partial<Pick<P, keyof Props>>
  >;
}

export { withField, useFieldProps };
