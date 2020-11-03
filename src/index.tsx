import * as React from 'react';
import { render } from 'react-dom';
import { App } from './app.component';
import { createBrowserHistory } from 'history';

const setup = async () => {
  render(<App />, document.getElementById('app'));
};

setup();
