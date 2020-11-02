import { Store } from 'redux';
import { History } from 'history';

/**
 * Props
 */
type ProviderProps = {
  /**
   * App store
   */
  store: Store;
  /**
   * Router history
   */
  history: History;
};

export { ProviderProps };
