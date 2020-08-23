import * as React from 'react';
import { UikitProps } from './uikit.props';
import * as styles from './uikit.scss';
import { Button, Card } from '@core';

/**
 * Renders Uikit
 */
const Uikit: React.FC<UikitProps> = ({}) => (
  <div className={styles.uikit}>
    {/* Button */}
    <div className={styles.section}>
      <h1 className={styles.title}>Button</h1>
      <div className={styles.buttons}>
        <Button>Primary</Button>
        <Button theme='secondary'>Secondary</Button>
        <Button size='lg'>Large</Button>
        <Button size='sm'>Small</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>

    {/* Card */}
    <div className={styles.section}>
      <h1 className={styles.title}>Card</h1>
      <div className={styles.cards}>
        <Card className={styles.card}>This is a custom card</Card>
        <Card className={styles.card} disabled>
          This is a disabled card
        </Card>
      </div>
    </div>
  </div>
);

export { Uikit };
