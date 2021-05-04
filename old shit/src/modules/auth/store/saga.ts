import { Saga } from 'redux-chill';
import { login } from './actions';

class AuthSaga {
  /**
   * Login
   */
  @Saga(login)
  public *login() {}

  /**
   * Test init
   */
  @Saga()
  public *init() {}
}

const sagas = [new AuthSaga()];

export { AuthSaga, sagas };
