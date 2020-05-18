import { useRef, useEffect } from 'react';

/**
 * Use previous value
 */
const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export { usePrevious };
