import { useGeneralStore } from '@hooks';

/**
 * <App /> props
 */
const useAppProps = () => {
  const {
    state: { user }
  } = useGeneralStore();

  return {
    user
  };
};

export { useAppProps };
