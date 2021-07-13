import { Container } from 'inversify';
import { Installer } from '@packages/store';
import { RegistrationState } from './state';
import { RegistrationStore } from './store';

class RegistrationInstaller extends Installer {
  public install(container: Container) {
    Installer.install(container, RegistrationState, RegistrationStore);
  }
}

export { RegistrationInstaller };
