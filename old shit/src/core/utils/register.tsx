import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import * as to from 'to-case';

/**
 * Load module
 */
const register = (name: string, factory: () => Promise<any>) => {
  const Module = React.lazy(async () => {
    const module = await factory();
    const Component = module[to.pascal(name)];

    let registered = false;

    return {
      default: props => {
        const store = useStore();

        if (!registered) {
          const reducer = module[to.camel(name)];
          const { sagas } = module;

          store.register(name, reducer, sagas);

          registered = true;
        }

        return <Component {...props} />;
      }
    };
  });

  return Module;
};

export { register };
