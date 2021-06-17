import 'reflect-metadata';
import { App } from './app.component';
import { ContainerContext, container } from './container';
import { configure } from 'mobx';
import { render } from 'react-dom';
import React from 'react';

render(
  <ContainerContext.Provider value={container}>
    <App />
  </ContainerContext.Provider>,
  document.getElementById('app')
);
