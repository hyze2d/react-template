import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';
import { Button, hoc } from '@core';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@store';
import { login } from './store';

/**
 * Use auth
 */
const useAuth = ({}: AuthProps) => {
  const dispatch = useDispatch();
  const { pathname } = useSelector((state: State) => state.router.location);

  useEffect(() => {
    dispatch(login());
  }, []);

  return {
    pathname,
    example: 'example prop provided by "hoc"'
  };
};

/**
 * <Auth />
 */
const Auth = hoc(useAuth, ({ example, pathname }) => (
  <div className={styles.auth}>
    <div>{pathname}</div>
    <div>{example}</div>
    <Link to='/profile'>To profile</Link>
    <Button>Cheburek</Button>
  </div>
));

export { Auth };
