import { GeneralInstaller } from './store';
import { NavLink, Route, Switch } from 'react-router-dom';
import { hoc } from '@packages/utils';
import { useAppProps } from './app.props';
import { withInstaller } from '@packages/store';
import React, { FC, Suspense } from 'react';

const Auth = React.lazy(() =>
  import('@auth').then(res => ({ default: res.Auth }))
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

  hoc(useAppProps, ({ user }) => {
    let content;

    switch (true) {
      case !user: {
        content = (
          <Switch>
            <Route path='/auth' component={Auth} />
          </Switch>
        );

        break;
      }

      default:
        content = (
          <Switch>
            <Route path='/' component={Dashboard} />
            <Route path='/profile' component={Profile} />
          </Switch>
        );

        break;
    }

    return <Suspense fallback={null}>{content}</Suspense>;
  })
);

export { App };
