import { Events } from 'src/events';
import { GeneralState } from './general.state';
import { Login } from 'src/auth/auth.events';
import { injectable } from 'inversify';

@injectable()
class GeneralStore {
  public constructor(private state: GeneralState, private events: Events) {
    this.events.on(Login, this.onLogin);
  }

  public onLogin = ({ user }: Login) => {
    this.state.user = user;
  };
}

export { GeneralStore };
