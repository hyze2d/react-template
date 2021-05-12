import { AppProps, useAppProps } from './app.props';
import { hoc } from './packages/utils';
import { observer } from 'mobx-react';
import React, { FC } from 'react';

/**
 * <App />
 */
const App = hoc(useAppProps, ({ general }) => {
  if (!general.user) {
    return <div>Pls login</div>;
  }

  // @ts-ignore
  return <div>{general.user.email}</div>;
});

export { App };
