import { History } from 'history';
import { app } from './reducer';
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enviroment } from '@env';
import { getContext } from './context';
import { run } from 'redux-chill';
import { sagas } from './sagas';
import createSagaMiddleware from 'redux-saga';

/**
 * Custom store methods
 */
declare module 'redux' {
  interface Store {
    register: (name: string, reducer, sagas: any[]) => any;
  }
}

/**
 * Create redux store
 */
const createStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error => {}
  });
  const applied = applyMiddleware(sagaMiddleware);
  const reducer = combineReducers(app);
  const store = reduxCreateStore(
    reducer,
    enviroment.development ? composeWithDevTools(applied) : applied
  );
  const modules = {};
  const context = getContext(history, store);

  run(sagaMiddleware, sagas, context);

  store.register = (name, reducer, sagas) => {
    if (modules[name]) return;

    if (reducer) {
      modules[name] = reducer;

      store.replaceReducer(
        combineReducers({
          ...app,
          ...modules
        })
      );
    }

    if (sagas) {
      run(sagaMiddleware, sagas, context);
    }
  };

  return store;
};

export * from './state';
export { createStore };
