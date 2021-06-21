import { InputProps } from './input.props';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './input.scss';

/**
 * <Input />
 */
const Input: FC<InputProps> = ({
  type,
  value,
  error,
  label,
  hasError,
  onChange,
  className
}) => (
  <div className={classNames(styles.container, className)}>
    {label && <label className={styles.label}>{label}</label>}

    <input
      className={classNames(styles.input)}
      type={type}
      value={value}
      onChange={event => {
        onChange(event.target.value);
      }}
    />

    {hasError && <div className={styles.error}>{error}</div>}
  </div>
);

Input.defaultProps = {
  type: 'text'
};

export { Input };
