import * as React from 'react';
import { App } from './app.component';
import { render } from 'react-dom';

const setup = async () => {
  render(<App />, document.getElementById('app'));
};

setup();
