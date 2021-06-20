import { AppRoutes } from './app.routes';
import { GeneralInstaller } from './store';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Routes } from '@packages/routing';
import { hoc } from '@packages/utils';
import { useAppProps } from './app.props';
import { withInstaller } from '@packages/store';
import React, { FC, Suspense } from 'react';

const Auth = React.lazy(() =>
  import('@auth').then(res => ({ default: res.AuthModule }))
);

const Dashboard = React.lazy(() =>
  import('@dashboard').then(res => ({ default: res.Dashboard }))
);

const Profile = React.lazy(() =>
  import('@profile').then(res => ({ default: res.Profile }))
);

/**
 * <App />
 */
const App: FC = withInstaller(
  new GeneralInstaller(),

  hoc(useAppProps, ({ user }) => (
    <Suspense fallback={null}>
      <Routes
        map={
          user
            ? [
                ['', Dashboard],
                [AppRoutes.Profile, Profile]
              ]
            : [[AppRoutes.Auth, Auth]]
        }
      />
    </Suspense>
  ))
);

export { App };
