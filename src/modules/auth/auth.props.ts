import { useAuthStore } from './hooks';
import { useEffect } from 'react';

const useAuthProps = () => {
  const {
    store,
    state: { email }
  } = useAuthStore();

  return {
    email
  };
};

export { useAuthProps };
