import { ComponentType, useEffect, useState } from 'react';
import { Installer } from './installer';
import { useContainer } from './context';
import React from 'react';

const installers: Installer[] = [];

function withInstaller<C extends ComponentType>(
  installer: Installer,
  Component: C,
  Preloader?: ComponentType
) {
  return props => {
    const container = useContainer();
    const [installed, setInstalled] = useState(
      installers.some(one => one == installer)
    );

    useEffect(() => {
      if (installed) return;

      Promise.resolve()
        .then(() => installer.install(container))
        .then(() => {
          installers.push(installer);

          setInstalled(true);
        })
        .catch(error => {
          console.log('--INSTALLATION ERROR--');

          console.error(error);

          console.log('--INSTALLATION ERROR--');
        });
    }, []);

    if (!installed) {
      return Preloader ? <Preloader /> : null;
    }

    return <Component {...props} />;
  };
}

export { withInstaller };
