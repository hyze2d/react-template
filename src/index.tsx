import 'reflect-metadata';
import { App } from './app.component';
import { BrowserRouter, Router } from 'react-router-dom';
import { ContainerContext } from '@packages/store';
import { build } from './container';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import React from 'react';

const history = createBrowserHistory();
const container = build(history);

render(
  <ContainerContext.Provider value={container}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContainerContext.Provider>,
  document.getElementById('app')
);

// <Router history={history}>
//   <App />
// </Router>
