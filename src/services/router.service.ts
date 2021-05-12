import { DIKey } from 'src/config';
import { History, To } from 'history';
import { inject, injectable } from 'inversify';

@injectable()
class RouterService {
  public constructor(@inject(DIKey.History) private history: History) {}

  public navigate = (to: To) => {
    this.history.push(to);
  };
}

export { RouterService };
