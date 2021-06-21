import { Container } from 'inversify';
import { makeAutoObservable } from 'mobx';

abstract class Installer {
  public static install(container: Container, State, Store, Subscriber?) {
    const deps = [State, Store, Subscriber].filter(item => item);

    deps.forEach(item => {
      container.bind(item).toSelf().inSingletonScope();
    });

    const [state, store] = [container.get(State), container.get(Store)];

    [state, store].map(dep => makeAutoObservable(dep as object));

    // initialized after bc makeAutoObservable should wrap store/state first
    if (!Subscriber) return;

    container.get(Subscriber);
  }

  public id?: string;

  public children?: Installer[] = [];

  /**
   * Install module
   */
  public abstract install(container: Container);
}

export { Installer };
