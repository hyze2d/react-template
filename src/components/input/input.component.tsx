import * as styles from './input.scss';
import { InputProps } from './input.props';
import React, { FC } from 'react';
import classNames from 'classnames';

/**
 * <Input />
 */
const Input: FC<InputProps> = ({ value, onChange, error, hasError, label }) => (
  <div className={classNames(styles.input)}>
    {label && <label className={styles.label}>{label}</label>}

    <input
      className={classNames(styles.input)}
      type='text'
      value={value}
      onChange={event => {
        onChange(event.target.value);
      }}
    />

    {hasError && <div className={styles.error}>{error}</div>}
  </div>
);

export { Input };
