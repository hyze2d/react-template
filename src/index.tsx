import './styles/global/index.scss';
import 'reflect-metadata';
import { App } from './app.component';
import { AuthInstaller, AuthState } from '@auth/store';
import { ContainerContext } from '@packages/store';
import { RegistrationState } from '@auth/modules/registration/store';
import { Router } from 'react-router-dom';
import { Theme, ThemeProvider } from '@packages/theme';
import { build } from './container';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import React from 'react';

const history = createBrowserHistory();

const container = build(history);

const theme: Theme = {
  color: {
    primary: '#FE6B8B',
    secondary: '#FF8E53',
    tertiary: '#FF8E53',

    warning: '#FF8E53',
    error: '#FF8E53',
    info: '#FF8E53',
    success: '#FF8E53'
  },

  space: 12
};

render(
  <ContainerContext.Provider value={container}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </ContainerContext.Provider>,
  document.getElementById('app')
);
