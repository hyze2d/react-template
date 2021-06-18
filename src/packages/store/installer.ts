import { Container } from 'inversify';
import { makeAutoObservable } from 'mobx';

abstract class Installer {
  public static install(container: Container, State, Store) {
    container.bind(State).toSelf().inSingletonScope();
    container.bind(Store).toSelf().inSingletonScope();

    [container.get<object>(State), container.get<object>(Store)].map(dep =>
      makeAutoObservable(dep)
    );
  }

  public id?: string;

  /**
   * Install module
   */
  public abstract install(container: Container);
}

export { Installer };
