import { Container } from 'inversify';
import { DIKey } from 'src/config/di-key';
import { GeneralState } from './state';
import { GeneralStore } from './store';

class GeneralContainer {
  public register(container: Container) {
    container.bind(GeneralState).toSelf().inSingletonScope();

    container
      .bind(DIKey.MakeAutoObservable)
      .toDynamicValue(context => container.get(GeneralState));

    container.bind(GeneralStore).toSelf().inSingletonScope();
  }
}

export { GeneralContainer, GeneralState, GeneralStore };
