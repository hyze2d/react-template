import { FC, Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { RoutesProps } from './routes.props';
import React from 'react';

/**
 * <Routes />
 */
const Routes: FC<RoutesProps> = ({ map, useSwitch }) => {
  const match = useRouteMatch();

  const Parent = useSwitch ? Switch : Fragment;

  return (
    <Parent>
      {map.map(([path, component]) => (
        <Route
          key={path}
          path={match.path + (match.path != '/' ? '/' : '') + path}
          component={component}
        />
      ))}
    </Parent>
  );
};

Routes.defaultProps = {
  useSwitch: true
};

export { Routes };
