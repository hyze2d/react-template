import * as React from 'react';
import { ProviderProps } from './provider.props';
import { Provider as StoreProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Provider as TranslationProvider } from '@core';

const translations = {
  en: require('../locales/en.json')
};

/**
 * Renders Provider
 */
const Provider: React.FC<ProviderProps> = ({ children, store, history }) => (
  <StoreProvider store={store}>
    <TranslationProvider
      lng='en'
      fallbackLng='en'
      translations={translations}
      onSet={locale => console.log('SET', locale)}
    >
      <Router history={history}>{children}</Router>
    </TranslationProvider>
  </StoreProvider>
);

export { Provider };
