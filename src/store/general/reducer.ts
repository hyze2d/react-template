import { GeneralState } from './state';
import { reducer } from 'redux-chill';

const general = reducer(new GeneralState());

export { general };
