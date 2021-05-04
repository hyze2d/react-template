import { Event } from 'src/events';
import { User } from 'src/models';

class Login extends Event<Login> {
  public user: User;
}

export { Login };
