import { Container } from 'inversify';
import { useContainer } from './context';
import { useMemo } from 'react';

const createUseStore = <T>(selector: (container: Container) => T) => (
  deps = []
) => {
  const container = useContainer();

  return useMemo(() => selector(container), deps);
};

const createBaseUseStore = <T, P>(
  State: new (...args: any[]) => T,
  Store: new (...args: any[]) => P
) =>
  createUseStore(container => ({
    state: container.get(State) as T,
    store: container.get(Store) as P
  }));

export { createUseStore, createBaseUseStore };
