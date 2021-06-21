import { Credentials } from '../models';
import { injectable } from 'inversify';

@injectable()
class AuthState {
  public credentials = new Credentials();
}

export { AuthState };
