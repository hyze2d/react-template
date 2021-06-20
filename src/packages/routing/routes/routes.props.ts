import { ComponentType } from 'react';

type RouteMapping = [string, ComponentType<any>];

type RoutesProps = {
  map: RouteMapping[];
  useSwitch?: boolean;
};

export { RoutesProps, RouteMapping };
