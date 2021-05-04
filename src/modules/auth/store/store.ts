import { AuthState } from './state';
import { Events } from 'src/packages/store/events';
import { Flow } from 'src/packages/store/flow';
import { Login } from './events';
import { User } from 'src/models';
import { flow, isFlowCancellationError } from 'mobx';
import { injectable } from 'inversify';

const sleep = time => new Promise(res => setTimeout(res, time));

@injectable()
class AuthStore {
  public constructor(private state: AuthState, private events: Events) {}

  @Flow()
  public *login(email: string, password: string) {
    // login user bla bla
    // ...
    yield sleep(3000);

    const user = new User();
    user.id = 1;
    user.email = email;
    user.name = 'Bla bla';
    user.phone = '+92123131131';

    this.events.dispatch(
      new Login({
        user
      })
    );

    return {
      id: 1
    };
  }
}

export { AuthStore };
