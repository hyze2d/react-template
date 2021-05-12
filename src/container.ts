import { Container } from 'inversify';
import { DIKey } from './config/di-key';
import { Events } from './packages/store/events';
import { RouterService } from './services';
import { createBrowserHistory } from 'history';
import { makeAutoObservable } from 'mobx';

class AppContainer {
  /**
   * Boostrap app container
   */
  public static create(containers: any[]) {
    const container = new Container();
    const history = createBrowserHistory();

    container.bind(DIKey.History).toConstantValue(history);

    container.bind(RouterService).toSelf().inSingletonScope();

    container.bind(Events).toSelf().inSingletonScope();

    containers.forEach(Registrator => {
      new Registrator().register(container);
    });

    container.getAll<any>(DIKey.MakeAutoObservable).map(item => {
      makeAutoObservable(item);
    });

    return container;
  }
}

export { AppContainer };
