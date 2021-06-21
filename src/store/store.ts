import { injectable } from 'inversify';
import { sleep } from '@packages/utils';

@injectable()
class GeneralStore {
  public *getUser() {
    yield sleep(1000);

    console.log('GET USER');
  }
}

export { GeneralStore };
