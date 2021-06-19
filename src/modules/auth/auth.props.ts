import { useAuthStore } from './hooks';

const useAuthProps = () => {
  const {
    store,
    state: { email }
  } = useAuthStore();

  const onClick = () => {
    store.setEmail('KEKW@KEKW.KEKW');
  };

  return {
    email,
    onClick
  };
};

export { useAuthProps };
