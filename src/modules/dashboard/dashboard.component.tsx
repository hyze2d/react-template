import { Button, Input } from '@components';
import { DashboardProps } from './dashboard.props';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './dashboard.scss';

/**
 * <Dashboard />
 */
const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.dashboard}>
    <Input onChange={() => {}} value='dsa' />
    <Link to='/auth/sign-in'>kkek</Link>
    <Button>Dashboard</Button>
  </div>
);

export { Dashboard };
