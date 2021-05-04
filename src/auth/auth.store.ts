import { AuthState } from './auth.state';
import { Events } from 'src/events';
import { Login } from './auth.events';
import { User } from 'src/models';
import { flow, isFlowCancellationError } from 'mobx';
import { injectable } from 'inversify';

const Flow = () => {
  let currentFlow;

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function (...args) {
      const self = this;

      if (currentFlow) {
        currentFlow.cancel();
      }

      currentFlow = flow(function* (...args) {
        return yield* original.call(self, ...args);
      })(...args);

      currentFlow.catch(err => {
        if (!isFlowCancellationError(err)) throw err;
      });
    };
  };
};

// const Flow = () => (target: any, key: string) => {
//   if (!target.__flows__) {
//     target.__flows__ = [];
//   }

//   target.__flows__.push(key);
// };

const sleep = time => new Promise(res => setTimeout(res, time));

// const HasFlows = () => (ctor: Function) => {
//   const keys: string[] = ctor.prototype.__flows__;
//   const active = {};

//   keys.forEach(key => {
//     const original = ctor.prototype[key];

//     ctor.prototype[key] = function (...args) {
//       const self = this;

//       if (active[key]) {
//         active[key].cancel();
//       }

//       active[key] = flow(function* (...args) {
//         return yield* original.call(self, ...args);
//       })(...args);

//       active[key].catch(err => {
//         if (!isFlowCancellationError(err)) throw err;
//       });
//     };
//   });
// };

@injectable()
class AuthStore {
  public constructor(private state: AuthState, private events: Events) {}

  @Flow()
  public *login(email: string, password: string) {
    // console.log(this, 'loig');
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
  }
}

export { AuthStore };
