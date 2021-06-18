import { AuthState } from './state';
import { injectable } from 'inversify';
import { runInAction } from 'mobx';

@injectable()
class AuthStore {
  public constructor(private state: AuthState) {}
}

export { AuthStore };
