import { AuthState } from './auth.state';
import { Events } from 'src/events';
import { Login } from './auth.events';
import { User } from 'src/models';
import { injectable } from 'inversify';

@injectable()
class AuthStore {
  public constructor(private state: AuthState, private events: Events) {}

  public login = () => {
    // login user bla bla
    // ...
    const user = new User();

    user.id = 1;
    user.email = 'bla@bla.com';
    user.name = 'Bla bla';
    user.phone = '+92123131131';

    this.events.dispatch(
      new Login({
        user
      })
    );
  };
}

export { AuthStore };
