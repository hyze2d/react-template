import { useEffect, useRef } from 'react';

const useMounted = (callback = () => {}) => {
  let isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    callback();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return () => isMounted.current;
};

export { useMounted };
