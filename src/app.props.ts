import { AuthState, AuthStore } from '@auth/store';
import { GeneralState } from './store';
import { useContainer, useSelector } from './hooks';
import { useEffect } from 'react';

type AppProps = {};

/**
 * <App /> props
 */
const useAppProps = (_: AppProps) => {
  const [general, { email, phone }, auth] = useContainer(
    GeneralState,
    AuthState,
    AuthStore
  );

  const {} = useSelector(container => container.get(GeneralState));

  useEffect(() => {
    auth.login('dsad', 'dsada');
  }, []);

  return { general };
};

export { AppProps, useAppProps };
