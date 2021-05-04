import { AuthState } from './auth.state';
import { AuthStore } from './auth.store';
import { Container } from 'inversify';
import { DIKey } from 'src/di-key';

class AuthContainer {
  public register(container: Container) {
    container.bind(AuthState).toSelf().inSingletonScope();

    container
      .bind(DIKey.MakeAuthObservable)
      .toDynamicValue(context => container.get(AuthState));

    container.bind(AuthStore).toSelf().inSingletonScope();
  }
}

export { AuthContainer };
