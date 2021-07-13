import { AuthState } from './state';
import { AuthStore } from './store';
import { Container } from 'inversify';
import { Installer } from '@packages/store';
import { RegistrationInstaller } from '@auth/registration/store';

class AuthInstaller extends Installer {
  public children = [new RegistrationInstaller()];

  public install(container: Container) {
    Installer.install(container, AuthState, AuthStore);
  }
}

export { AuthInstaller };
