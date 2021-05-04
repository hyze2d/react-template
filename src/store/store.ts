import { Events } from 'src/packages/store/events';
import { GeneralState } from './state';
import { Login } from '@auth';
import { injectable } from 'inversify';

@injectable()
class GeneralStore {
  public constructor(private state: GeneralState, private events: Events) {
    this.events.on(Login, this.onLogin);
  }

  public onLogin = ({ user }: Login) => {
    this.state.user = user;

    console.log(this.state, 'st');
  };
}

export { GeneralStore };
