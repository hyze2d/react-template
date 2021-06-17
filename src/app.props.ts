import { Reaction, flowResult } from 'mobx';
import { Store, container, useStore } from './container';
import { useObserver } from 'mobx-react-lite';

type AppProps = {};

/**
 * <App /> props
 */
const useAppProps = (_: AppProps) => {
  const store = useStore();
  const { value } = store;

  const onClick = async () => {
    await flowResult(store.setKek('blabla'));
  };

  return {
    value,
    onClick
  };
};

export { AppProps, useAppProps };
