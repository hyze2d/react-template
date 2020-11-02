import * as React from 'react';
import { ProfileProps } from './profile.props';
import * as styles from './profile.scss';
import { Button } from '@core';
import { Link } from 'react-router-dom';

/**
 * Renders Profile
 */
const Profile: React.FC<ProfileProps> = ({}) => (
  <div className={styles.profile}>
    <Link to='/auth'>To auth</Link>
    <Button>Kek</Button>
  </div>
);

export { Profile };
