import { injectable } from 'inversify';

type ClassType<T> = (...args: any[]) => T;

class Subscriber<T> {
  public once: boolean;

  public callback: (payload: T) => any;
}

class Subscription<T> {
  public event: ClassType<T>;

  public subscribers: Subscriber<T>[];
}

@injectable()
class Dispatcher {
  public subscriptions: Subscription<unknown>[] = [];

  private subscribe<T, P extends ClassType<T>>(
    event: P,
    subscriber: Subscriber<T>
  ) {
    const sub = this.subscriptions.find(one => one.event == event);

    if (!sub) {
      const sub = new Subscription();

      sub.event = event;

      sub.subscribers = [subscriber];

      this.subscriptions.push(sub);

      return;
    }

    sub.subscribers.push(subscriber);
  }

  public dispatch = (payload: object, { shouldWait = false }) => {
    const subscription = this.subscriptions.find(
      one => payload instanceof one.event
    );

    if (!subscription) return;

    const toCall: Subscriber<any>[] = [];

    const forRemoval = subscription.subscribers.filter(subscriber => {
      const { once } = subscriber;

      toCall.push(subscriber);

      return once;
    });

    const calls = toCall.map(({ callback }) => callback(payload));

    subscription.subscribers = subscription.subscribers.filter(item =>
      forRemoval.some(one => one != item)
    );

    return shouldWait ? Promise.all(calls) : null;
  };

  public on<T, P extends ClassType<T>>(event: P, callback: (event: T) => any) {
    this.subscribe(event, {
      callback,
      once: false
    });
  }

  public once<T, P extends ClassType<T>>(
    event: P,
    callback: (event: T) => any
  ) {
    this.subscribe(event, {
      callback,
      once: true
    });
  }

  public off<T, P extends ClassType<T>>(event: P, callback: (event: T) => any) {
    const subscription = this.subscriptions.find(one => one.event == event);

    if (!subscription) return;

    subscription.subscribers = subscription.subscribers.filter(
      item => item.callback != callback
    );
  }
}

export { Dispatcher };
