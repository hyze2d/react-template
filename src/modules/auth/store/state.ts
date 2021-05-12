import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
class AuthState {
  public email: string;
  public phone: string;
}

export { AuthState };
