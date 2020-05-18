import * as React from 'react';
import { ProfileProps } from './profile.props';
import * as styles from './profile.scss';
import { Button, useTranslation, hoc } from '@core';
import { Link } from 'react-router-dom';

const useProfile = () => {
  const { t } = useTranslation('profile', () => import('./profile.lang.json'));

  return { t };
};

/**
 * Renders Profile
 */
const Profile = hoc(useProfile, ({ t }) => (
  <div className={styles.profile}>
    <Link to='/auth'>To auth</Link>
    <div>{t('profile.hey')}</div>
    <Button>Kek</Button>
  </div>
));

export { Profile };
