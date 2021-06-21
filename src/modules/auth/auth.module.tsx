import { AuthInstaller } from './store';
import { AuthRoute } from './auth.routes';
import { Recovery, SetPassword, SignIn, SignUp } from './routes';
import { Routes } from '@packages/routing';
import { withInstaller } from '@packages/store';
import React from 'react';

const installer = new AuthInstaller();

const AuthModule = withInstaller(installer, () => (
  <Routes
    map={[
      [AuthRoute.SignIn, SignIn],
      [AuthRoute.SignUp, SignUp],
      [AuthRoute.Recovery, Recovery],
      [AuthRoute.SetPassword, SetPassword]
    ]}
  />
));

export { AuthModule };