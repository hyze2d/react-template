import { AppRoutes } from 'src/app.routes';
import { AuthRoute } from '@auth/auth.routes';
import { Button, Field } from '@components';
import { Form } from '@packages/form';
import { Link } from 'react-router-dom';
import { hoc } from '@packages/utils';
import { useSignInProps } from './sign-in.props';
import React, { FC, FormEvent } from 'react';
import classNames from 'classnames';
import styles from './sign-in.scss';

/**
 * <SignIn />
 */
const SignIn = hoc(useSignInProps, ({ form }) => (
  <Form className={styles.signIn} use={form}>
    <Field.Input className={styles.field} name='email' label='Email' />

    <Field.Input
      className={styles.field}
      name='password'
      type='password'
      label='Password'
    />

    <Button className={styles.submit} type='submit'>
      Sign In
    </Button>

    <div>
      <Link
        className={styles.register}
        to={`/${AppRoutes.Auth}/${AuthRoute.SignUp}`}
      >
        Don't have an account?
      </Link>
    </div>
  </Form>
));

export { SignIn };
