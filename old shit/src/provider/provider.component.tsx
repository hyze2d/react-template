import * as React from 'react';
import { ProviderProps } from './provider.props';
import { Provider as StoreProvider } from 'react-redux';
import { Router } from 'react-router-dom';

/**
 * Renders Provider
 */
const Provider: React.FC<ProviderProps> = ({ children, store, history }) => (
  <StoreProvider store={store}>
    <Router history={history}>{children}</Router>
  </StoreProvider>
);

export { Provider };
