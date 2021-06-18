import { NavLink, Route, Switch } from 'react-router-dom';
import React, { FC } from 'react';

const Auth = React.lazy(() =>
  import('@auth').then(res => ({ default: res.Auth }))
);

/**
 * <App />
 */
const App: FC = () => (
  <div>
    <div>
      <NavLink to='/' activeStyle={{ color: 'green' }}>
        Home
      </NavLink>

      <NavLink to='/auth' activeStyle={{ color: 'green' }}>
        Auth
      </NavLink>
    </div>

    <React.Suspense fallback={null}>
      <Switch>
        <Route component={Auth} path='/auth' />
        <Route render={() => 'Home'} path='/' />
      </Switch>
    </React.Suspense>
  </div>
);

export { App };
