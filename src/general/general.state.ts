import { User } from 'src/models';
import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
class GeneralState {
  public user: User;
}

export { GeneralState };
