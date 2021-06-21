import { Button, Field } from '@components';
import { Form } from '@packages/form';
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
      label='Email'
    />

    <Button className={styles.submit} type='submit'>
      Sign In
    </Button>
  </Form>
));

export { SignIn };
