import { AuthState } from './state';
import { Credentials } from '../models';
import { Dispatcher } from '@packages/store';
import { GetUser } from '@store/commands';
import { injectable } from 'inversify';
import { sleep } from '@packages/utils';

@injectable()
class AuthStore {
  public constructor(
    private state: AuthState,
    private dispatcher: Dispatcher
  ) {}

  public *login(credentials: Credentials) {
    console.log('login start');

    yield sleep(1000);

    console.log('login sleep end');

    this.state.credentials = credentials;

    yield this.dispatcher.dispatch(new GetUser(), { shouldWait: true });

    console.log('login end');
  }
}

export { AuthStore };
