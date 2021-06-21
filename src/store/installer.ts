import { Container } from 'inversify';
import { GeneralState } from './state';
import { GeneralStore } from './store';
import { GeneralSubscriber } from './subscriber';
import { Installer } from '@packages/store';

class GeneralInstaller extends Installer {
  public install(container: Container) {
    Installer.install(container, GeneralState, GeneralStore, GeneralSubscriber);
  }
}

export { GeneralInstaller };
