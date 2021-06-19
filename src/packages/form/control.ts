import { ReactNode } from 'react';

/**
 * Formik
 */
type ControlProps<V = string> = {
  /**
   * Html id
   */
  id?: string;
  /**
   * Control value
   */
  value: V;
  /**
   * Control label
   */
  label?: ReactNode;
  /***
   * Is form control disabled
   */
  disabled?: boolean;
  /**
   * Field error
   */
  error?: ReactNode;
  /**
   * Is control touched
   */
  touched?: boolean;
  /**
   * Is has error
   */
  hasError?: boolean;
  /**
   * Placeholder
   */
  placeholder?: React.ReactNode;
  /**
   * Is Field required
   */
  required?: boolean;
  /**
   * Change handler
   */
  onChange?: (value: V) => void;
  /**
   * Handle touch
   */
  onTouch?: () => void;
  /**
   * Control tabindex
   */
  tabIndex?: number;
};

export { ControlProps };
