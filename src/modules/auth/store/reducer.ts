import { reducer } from 'redux-chill';
import { AuthState } from './state';

/**
 * Auth state
 */
const auth = reducer(new AuthState());

export { auth };
