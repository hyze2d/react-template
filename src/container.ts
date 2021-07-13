import { Container } from 'inversify';
import { DIKey } from './config';
import { Dispatcher, Installer } from '@packages/store';
import { History } from 'history';

const install = (installer: Installer, container: Container) => {
  installer.children.forEach(item => {
    install(item, container);
  });

  installer.install(container);
};

const build = (history: History, installers: Installer[] = []) => {
  const container = new Container();

  container.bind(Dispatcher).toSelf().inSingletonScope();
  container.bind(DIKey.History).toConstantValue(history);

  installers.forEach(installer => {
    install(installer, container);
  });

  return container;
};

export { build };
