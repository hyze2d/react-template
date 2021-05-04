import { useEffect, useRef } from 'react';

/**
 * Skip first render
 */
const useUpdate: typeof useEffect = (callback, deps) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;

      return;
    }

    return callback();
  }, deps);
};

export { useUpdate };
