import { make } from 'redux-chill';
import { Location } from 'history';

/**
 * Navigate
 */
const navigate = make('[router] navigate').stage((path: string) => path);

/**
 * Transition
 */
const setLocation = make('[router] set location').stage(
  (location: Location) => location
);

export { navigate, setLocation };
