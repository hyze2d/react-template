import { AuthState } from './state';
import { AuthStore } from './store';
import { Container } from 'inversify';
import { DIKey } from 'src/config';

class AuthContainer {
  public register(container: Container) {
    container.bind(AuthState).toSelf().inSingletonScope();

    container
      .bind(DIKey.MakeAutoObservable)
      .toDynamicValue(context => container.get(AuthState));

    container.bind(AuthStore).toSelf().inSingletonScope();
  }
}

export { AuthContainer, AuthState, AuthStore };
export * from './events';
