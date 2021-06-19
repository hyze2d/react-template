import { AuthState } from './state';
import { injectable } from 'inversify';
import { runInAction } from 'mobx';

@injectable()
class AuthStore {
  public constructor(private state: AuthState) {}

  public setEmail(email: string) {
    this.state.email = email;
  }
}

export { AuthStore };
