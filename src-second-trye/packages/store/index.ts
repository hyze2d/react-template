import { Container } from 'inversify';

interface ISubContainer {
  /**
   * Method will be called on boostrap
   */
  register(container: Container): void;
}

export { ISubContainer };
