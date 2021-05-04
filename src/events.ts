import { injectable } from 'inversify';

@injectable()
class Events {
  public subscribers: {
    event: any[];
    callback;
  }[] = [];

  public on = <T extends new (...args: any[]) => any>(
    event: T | T[],
    callback: (event: InstanceType<T>) => void
  ) => {
    this.subscribers.push({
      event: Array.isArray(event) ? event : [event],
      callback
    });
  };

  public off = <T extends new () => any>(event: T | T[], callback) => {
    const events = Array.isArray(event) ? event : [event];

    this.subscribers = this.subscribers.filter(one => {
      const isCalllback = one.callback == callback;

      const isEvent = one.event.some(
        one => one == events.some(item => item == one)
      );

      return isCalllback && isEvent;
    });
  };

  public dispatch = event => {
    const callbacks = this.subscribers
      .filter(item => item.event.some(one => event instanceof one))
      .map(item => item.callback);

    callbacks.forEach(callback => callback(event));
  };
}

class Event<T> {
  public constructor(partial: Partial<T>) {
    for (let key in partial) {
      this[key as any] = partial[key];
    }
  }
}

export { Events, Event };
