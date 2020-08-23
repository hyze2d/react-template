import * as React from 'react';
import { CardProps } from './card.props';
import * as styles from './card.scss';
import classNames from 'classnames';

/**
 * Renders Card
 */
const Card: React.FC<CardProps> = ({ className, children, disabled }) => (
  <div
    className={classNames(styles.card, className, {
      [styles.cardDisabled]: disabled
    })}
  >
    {children}
  </div>
);

export { Card };

/**
 * Default props
 */
Card.defaultProps = {
  className: '',
  disabled: false
};
