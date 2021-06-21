import { ControlProps } from '@packages/form';

type InputProps = ControlProps<string> & {
  type?: string;
};

/**
 * <Input /> props
 */
const useInputProps = (_: InputProps) => {};

export { InputProps, useInputProps };
