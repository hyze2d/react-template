import { Container } from 'inversify';
import { ISubContainer } from './packages/store';

class AppContainer {
  public constructor(private subContainers: ISubContainer[] = []) {}

  public container = new Container();

  public boot = () => {
    const { container } = this;

    this.subContainers.forEach(subContainer => {
      subContainer.register(container);
    });
  };
}

export { AppContainer };
