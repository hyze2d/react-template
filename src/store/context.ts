import { enviroment } from '@env';
import { History } from 'history';
import { Store } from 'redux';

/**
 * Get context
 */
const getContext = (history: History, store: Store) => ({
  store,
  history
});

/**
 * Saga context
 */
type StoreContext = ReturnType<typeof getContext>;

export { StoreContext, getContext };
