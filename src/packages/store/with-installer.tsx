import { ComponentType, useEffect, useState } from 'react';
import { Container } from 'inversify';
import { Installer } from './installer';
import { useContainer } from './context';
import React from 'react';

const installers: Installer[] = [];

const install = async (installer: Installer, container: Container) => {
  await Promise.all(
    installer.children.map(item => {
      install(item, container);
    })
  );

  await installer.install(container);
};

const getAll = (installer: Installer, result: Installer[] = []) => {
  if (installer?.children?.length != 0) {
    installer.children.forEach(item => {
      getAll(item, result);
    });
  }

  result.push(installer);

  return result;
};

function withInstaller<C extends ComponentType<any>>(
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
        .then(() => install(installer, container))
        .then(() => {
          installers.push(...getAll(installer));

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
