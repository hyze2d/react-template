import { AuthInstaller } from './store';
import { hoc } from '@packages/utils';
import { useAuthProps } from './auth.props';
import { withInstaller } from '@packages/store';
import React from 'react';

const Auth = withInstaller(
  new AuthInstaller(),

  hoc(useAuthProps, ({ email, onClick }) => {
    console.log('auth comp');

    return (
      <div>
        <div>Auth smh</div>
        <div>email: {email}</div>

        <button onClick={onClick}>change email check</button>
      </div>
    );
  })
);

export { Auth };
