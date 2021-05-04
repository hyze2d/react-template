import { useLayoutEffect, useState } from 'react';

/**
 * Get sizes
 */
const get = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

/**
 * Use window sizes
 */
const useWindowSize = (period = 1000, deps = []) => {
  let [{ width, height }, set] = useState(get());
  let listener = () => {
    set(get());
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return {
    width,
    height,
    refresh: listener
  };
};

export { useWindowSize };
