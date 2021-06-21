import { ButtonProps } from './button.props';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './button.scss';

/**
 * <Button />
 */
const Button: FC<ButtonProps> = ({ children, className, ...props }) => (
  <button className={classNames(styles.button, className)} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button'
};

export { Button };
