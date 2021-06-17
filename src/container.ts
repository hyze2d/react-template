import { Container, injectable } from 'inversify';
import { Reaction, autorun, flowResult, makeAutoObservable } from 'mobx';
import { createContext, useContext, useMemo } from 'react';

const sleep = (duration: number) =>
  new Promise(res => setTimeout(res, duration));

@injectable()
class AnotherDependency {
  public bruh = 123;
}

@injectable()
class Store {
  public constructor(private another: AnotherDependency) {}

  public somefield: boolean;
  public value = 'initial';

  public goKek() {
    this.value = 'KEK';
  }

  public *setKek(value: string) {
    yield sleep(1500);

    this.value = value;

    return 'blabla';
  }
}

const container = new Container();

container.bind(AnotherDependency).toSelf().inSingletonScope();
container.bind(Store).toSelf().inSingletonScope();

const store = container.get(Store);

makeAutoObservable(store);

const ContainerContext = createContext<Container>(null);

const useStore = (deps: any[] = []) => {
  const container = useContext(ContainerContext);

  return useMemo(() => container.get(Store), deps);
};

export { container, Store, ContainerContext, useStore };
