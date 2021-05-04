import { flow, isFlowCancellationError } from 'mobx';

const Flow = () => {
  let currentFlow;

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function (...args) {
      const self = this;

      if (currentFlow) {
        currentFlow.cancel();
      }

      currentFlow = flow(function* (...args) {
        return yield* original.call(self, ...args);
      })(...args);

      currentFlow.catch(err => {
        if (!isFlowCancellationError(err)) throw err;
      });

      return currentFlow;
    };
  };
};

type GeneratorReturnType<T extends Generator> = T extends Generator<
  any,
  infer R,
  any
>
  ? R
  : never;

const asPromise = <T extends Generator>(result: T) =>
  (result as any) as Promise<GeneratorReturnType<T>>;

export { Flow, asPromise };
