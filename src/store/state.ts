import { app } from './reducer';
import { combineReducers } from 'redux';
import { router } from './router';
import { AuthState } from '@auth';

/**
 * App state
 */
type State = {
  router: ReturnType<typeof router>;
  auth: AuthState;
};

export { State };
