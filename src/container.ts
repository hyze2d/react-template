import { Container } from 'inversify';
import { DIKey } from './config';
import { History } from 'history';
import { createContext } from 'react';

const build = (history: History) => {
  const container = new Container();

  container.bind(DIKey.History).toConstantValue(history);

  return container;
};

export { build };
