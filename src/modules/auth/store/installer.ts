import { AuthState } from './state';
import { AuthStore } from './store';
import { Container } from 'inversify';
import { Installer } from '@packages/store';

class AuthInstaller extends Installer {
  public install(container: Container) {
    Installer.install(container, AuthState, AuthStore);
  }
}

export { AuthInstaller };
