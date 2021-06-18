import { injectable } from 'inversify';

@injectable()
class AuthState {
  public email: string = '';
  public password: string = '';
}

export { AuthState };
