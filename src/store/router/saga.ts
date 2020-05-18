import { StoreContext } from '@store/context';
import { Payload, Saga } from 'redux-chill';
import { navigate, setLocation } from './actions';
import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

class RouterSaga {
  /**
   * Listen history
   */
  @Saga()
  public *listen({ history }: StoreContext) {
    yield put(setLocation(history.location));

    try {
      const channel = eventChannel(emit => {
        const unsub = history.listen(location => {
          emit(location);
        });

        return () => {
          unsub();
        };
      });

      while (true) {
        const location = yield take(channel);

        yield put(setLocation(location));
      }
    } finally {
    }
  }
  /**
   * Navigate to url
   */
  @Saga(navigate)
  public *navigate(path: Payload<typeof navigate>, { history }: StoreContext) {
    if (!history) return;

    history.push(path);
  }
}

export { RouterSaga };
