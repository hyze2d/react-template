import 'reflect-metadata';
import { App } from './app.component';
import { AppContainer } from './container';
import { AuthContainer } from '@auth/store';
import { ContainerContext } from './hooks';
import { GeneralContainer } from './store';
import { render } from 'react-dom';
import React from 'react';

const container = AppContainer.create([GeneralContainer, AuthContainer]);

render(
  <ContainerContext.Provider value={container}>
    <App />
  </ContainerContext.Provider>,
  document.getElementById('app')
);
