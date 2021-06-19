import { Container } from 'inversify';
import { GeneralState } from './state';
import { GeneralStore } from './store';
import { Installer } from '@packages/store';

class GeneralInstaller extends Installer {
  public install(container: Container) {
    Installer.install(container, GeneralState, GeneralStore);
  }
}

export { GeneralInstaller };
