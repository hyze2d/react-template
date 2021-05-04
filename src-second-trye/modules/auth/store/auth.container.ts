import { AuthState } from './auth.state';
import { AuthStore } from './auth.store';
import { Container } from 'inversify';
import { ISubContainer } from 'src/packages/store';

class AuthContainer implements ISubContainer {
  public register(container: Container) {
    container.bind<AuthState>(AuthState).toSelf();
    container.bind<AuthStore>(AuthStore).toSelf();
  }
}

export { AuthContainer };
