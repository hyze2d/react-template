import { Dispatcher } from '@packages/store';
import { GeneralStore } from './store';
import { GetUser } from './commands';
import { injectable } from 'inversify';

@injectable()
class GeneralSubscriber {
  public constructor(
    private dispatcher: Dispatcher,
    private store: GeneralStore
  ) {
    dispatcher.on(GetUser as any, store.getUser);
  }
}

export { GeneralSubscriber };
