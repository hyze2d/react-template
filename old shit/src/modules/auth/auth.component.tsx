import { Button, hoc } from '@core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth.props';
import * as styles from './auth.scss';

/**
 * <Auth />
 */
const Auth = hoc(useAuth, ({ example, pathname, t }) => (
  <div className={styles.auth}>
    <div>{t('wow')}</div>
    <div>{t('auth.kek')}</div>
    <div>{pathname}</div>
    <div>{example}</div>
    <Link to='/profile'>To profile</Link>
    <Button>Cheburek</Button>
  </div>
));

export { Auth };
