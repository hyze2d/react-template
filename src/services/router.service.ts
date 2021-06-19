import { DIKey } from 'src/config';
import { History } from 'history';
import { inject } from 'inversify';

class RouterService {
  public constructor(@inject(DIKey.History) private history: History) {}

  public push(...params: Parameters<History['push']>) {
    this.history.push(...params);
  }
}

export { RouterService };
