import { Container } from 'inversify';
import { DIKey } from 'src/di-key';
import { GeneralState } from './general.state';
import { GeneralStore } from './general.store';

class GeneralContainer {
  public register(container: Container) {
    container.bind(GeneralState).toSelf().inSingletonScope();

    container
      .bind(DIKey.MakeAuthObservable)
      .toDynamicValue(context => container.get(GeneralState));

    container.bind(GeneralStore).toSelf().inSingletonScope();
  }
}

export { GeneralContainer };
