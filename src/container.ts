import { Container } from 'inversify';
import { DIKey } from './config';
import { Dispatcher } from '@packages/store';
import { History } from 'history';

const build = (history: History) => {
  const container = new Container();

  container.bind(Dispatcher).toSelf().inSingletonScope();
  container.bind(DIKey.History).toConstantValue(history);

  return container;
};

export { build };
