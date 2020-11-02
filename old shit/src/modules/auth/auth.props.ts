import { useDispatch, useSelector } from 'react-redux';
import { useTranslationSource } from '@core';
import { State } from '@store';
import { useEffect } from 'react';
import { login } from './store';

/**
 * Use auth
 */
const useAuth = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslationSource('auth', require('./auth.lang.json'));
  const { pathname } = useSelector((state: State) => state.router.location);

  useEffect(() => {
    dispatch(login());
  }, []);

  return {
    t,
    pathname,
    example: 'example prop provided by "hoc"'
  };
};

export { useAuth };
