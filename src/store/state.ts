import { User } from '@models';
import { injectable } from 'inversify';

@injectable()
class GeneralState {
  public user: User;
}

export { GeneralState };
