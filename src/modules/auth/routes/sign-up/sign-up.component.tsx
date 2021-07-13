import { AppRoutes } from 'src/app.routes';
import { AuthRoute } from '@auth/auth.routes';
import { Button, Field } from '@components';
import { Form } from '@packages/form';
import { Link } from 'react-router-dom';
import { hoc } from '@packages/utils';
import { useSignUpProps } from './sign-up.props';
import React from 'react';
import styles from './sign-up.scss';

/**
 * <SignUp />
 */
const SignUp = hoc(useSignUpProps, ({ form }) => (
  <Form className={styles.signIn} use={form}>
    <Field.Input className={styles.field} name='email' label='Email' />
    <Field.Input className={styles.field} name='name' label='Name' />

    <Field.Input
      className={styles.field}
      name='password'
      type='password'
      label='Password'
    />

    <Button className={styles.submit} type='submit'>
      Sign Up
    </Button>

    <div>
      <Link
        className={styles.register}
        to={`/${AppRoutes.Auth}/${AuthRoute.SignIn}`}
      >
        Have an account?
      </Link>
    </div>
  </Form>
));

export { SignUp };
