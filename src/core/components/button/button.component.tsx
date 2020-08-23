import * as React from 'react';
import { ButtonProps } from './button.props';
import * as styles from './button.scss';
import classNames from 'classnames';
import { capitalize } from '@core/utils';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({
  className,
  type,
  theme,
  size,
  children,
  disabled,
  onClick,
  ...props
}) => (
  <button
    className={classNames(
      styles.button,
      styles['button' + capitalize(theme)],
      styles['button' + capitalize(size)],
      {
        [styles.buttonDisabled]: disabled
      },
      className
    )}
    type={type}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export { Button };

/**
 * Default props
 */
Button.defaultProps = {
  className: '',
  type: 'button',
  theme: 'primary',
  size: 'md',
  disabled: false,
  onClick: () => {}
};
