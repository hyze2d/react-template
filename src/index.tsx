import 'reflect-metadata';
import { AppContainer } from './container';
import { AuthState } from './auth/auth.state';
import { AuthStore } from './auth/auth.store';
import { GeneralState } from './general/general.state';
import { GeneralStore } from './general/general.store';

const app = new AppContainer();

const auth = app.container.get(AuthStore);
const generalState = app.container.get(GeneralState);
const general = app.container.get(GeneralStore);

auth.login();

console.log(generalState.user);
