import { Container } from 'inversify';
import { createContext, useContext } from 'react';

const ContainerContext = createContext<Container>(null);

type ClassType<T> = new (...args) => T;

function useContainer<T1>(param1: ClassType<T1>): [T1];
function useContainer<T1, T2>(
  param1: ClassType<T1>,
  param2: ClassType<T2>
): [T1, T2];
function useContainer<T1, T2, T3>(
  param1: ClassType<T1>,
  param2: ClassType<T2>,
  param3: ClassType<T3>
): [T1, T2, T3];
function useContainer<T1, T2, T3, T4>(
  param1: ClassType<T1>,
  param2: ClassType<T2>,
  param3: ClassType<T3>,
  param4: ClassType<T4>
): [T1, T2, T3, T4];
function useContainer<T1, T2, T3, T4, T5>(
  param1: ClassType<T1>,
  param2: ClassType<T2>,
  param3: ClassType<T3>,
  param4: ClassType<T4>,
  param5: ClassType<T5>
): [T1, T2, T3, T4, T5];
function useContainer<T1, T2, T3, T4, T5, T6>(
  param1: ClassType<T1>,
  param2: ClassType<T2>,
  param3: ClassType<T3>,
  param4: ClassType<T4>,
  param5: ClassType<T5>,
  param6: ClassType<T6>
): [T1, T2, T3, T4, T5, T6];
function useContainer<T1, T2, T3, T4, T5, T6, T7>(
  param1: ClassType<T1>,
  param2: ClassType<T2>,
  param3: ClassType<T3>,
  param4: ClassType<T4>,
  param5: ClassType<T5>,
  param6: ClassType<T6>,
  param7: ClassType<T7>
): [T1, T2, T3, T4, T5, T6, T7];
function useContainer(...args: any[]) {
  const container = useContext(ContainerContext);

  return args.map(id => container.get(id));
}

function useSelector<T>(selector: (container: Container) => T) {
  const container = useContext(ContainerContext);

  return selector(container);
}

export { useContainer, useSelector, ContainerContext };
