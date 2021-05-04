import { AuthContainer } from '@auth';
import { Container } from 'inversify';
import { DIKey } from './config/di-key';
import { Events } from './packages/store/events';
import { GeneralContainer } from './store';
import { config } from './config/config';
import { makeAutoObservable } from 'mobx';

class AppContainer {
  /**
   * Boostrap app
   */
  public constructor(containers: any[]) {
    const { container } = this;

    container.bind(Events).toSelf().inSingletonScope();

    containers.forEach(Registrator => {
      new Registrator().register(container);
    });

    container.getAll<any>(DIKey.MakeAutoObservable).map(item => {
      makeAutoObservable(item);
    });
  }

  public container = new Container();
}

export { AppContainer };
