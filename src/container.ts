import { AuthContainer } from './auth';
import { Container } from 'inversify';
import { DIKey } from './di-key';
import { Events } from './events';
import { GeneralContainer } from './general';
import { makeAutoObservable } from 'mobx';

class AppContainer {
  public static register = [GeneralContainer, AuthContainer];

  public constructor() {
    const { container } = this;

    container.bind(Events).toSelf().inSingletonScope();

    AppContainer.register.forEach(Registrator => {
      new Registrator().register(container);
    });

    container.getAll<any>(DIKey.MakeAuthObservable).map(item => {
      makeAutoObservable(item);
    });
  }

  public container = new Container();
}

export { AppContainer };
