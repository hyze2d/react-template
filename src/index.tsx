import 'reflect-metadata';
import { AppContainer } from './container';
import { AuthContainer, AuthStore } from '@auth';
import { GeneralContainer, GeneralState, GeneralStore } from './store';
import { asPromise } from './packages/store';
import { flowResult } from 'mobx';

const app = new AppContainer([GeneralContainer, AuthContainer]);

const auth = app.container.get(AuthStore);
const generalState = app.container.get(GeneralState);
const general = app.container.get(GeneralStore);

auth.login('dsad', 'dsada');
auth.login('dsad', 'dsada'); // prev call will be canceled
