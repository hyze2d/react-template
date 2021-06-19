import { AuthInstaller } from './store';
import { Login } from './routes';
import { Route, Switch } from 'react-router-dom';
import { hoc } from '@packages/utils';
import { useAuthProps } from './auth.props';
import { withInstaller } from '@packages/store';
import React from 'react';

const Auth = withInstaller(
  new AuthInstaller(),

  hoc(useAuthProps, ({ email, onClick }) => (
    <Switch>
      <Route path='/auth/login' component={Login} />
    </Switch>
  ))
);

export { Auth };
