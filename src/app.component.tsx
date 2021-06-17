import {} from 'mobx-react-lite';
import { Store, container } from './container';
import { hoc } from './packages/utils';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { useAppProps } from './app.props';
import React, { useEffect } from 'react';

/**
 * <App />
 */
const App = hoc(useAppProps, ({ value, onClick }) => {
  console.log('kek');

  return (
    <div>
      <div>ROOT: {value}</div>

      <button onClick={onClick}>GO KEK</button>
    </div>
  );
});

export { App };
