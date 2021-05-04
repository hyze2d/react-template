import * as React from 'react';
import { App } from './app.component';
import { AppContainer } from './container';
import { AuthContainer } from '@auth';
import { render } from 'react-dom';

const setup = async () => {
  const appContainer = new AppContainer([new AuthContainer()]);

  render(<App />, document.getElementById('app'));
};

setup();
