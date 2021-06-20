import { hoc } from '@packages/utils';
import { useAuthProps } from './auth.props';
import React from 'react';

const Auth = hoc(useAuthProps, ({ email, onClick }) => (
  <div>Some root comp stuff</div>
));

export { Auth };
