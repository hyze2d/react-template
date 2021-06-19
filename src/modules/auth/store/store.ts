import { AuthState } from './state';
import { GeneralState } from '@store';
import { injectable } from 'inversify';
import { runInAction } from 'mobx';

@injectable()
class AuthStore {
  public constructor(
    private state: AuthState,
    private generalState: GeneralState
  ) {}

  public setEmail(email: string) {
    this.state.email = email;

    console.log(this.generalState.user, '<<< USER');
  }
}

export { AuthStore };
