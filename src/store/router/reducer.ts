import { reducer } from 'redux-chill';
import { setLocation } from './actions';
import { Location } from 'history';

/**
 * Router
 */
const router = reducer({
  previous: null as Location,
  location: null as Location
}).on(setLocation, (state, location) => {
  state.previous = state.location;
  state.location = location;
});

export { router };
