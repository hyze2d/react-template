import { useEffect, useRef, useState } from 'react';

/**
 * Use timeout
 */
const useCountdown = ({ tick, delay }, deps = []) => {
  let [left, setLeft] = useState(delay);
  let leftRef = useRef(left);
  let interval = useRef<any>();

  useEffect(() => {
    interval.current = setInterval(() => {
      const update = leftRef.current - tick;

      setLeft(update);

      leftRef.current = update;

      if (update == 0) clearInterval(interval.current);
    }, tick);

    return () => {
      clearInterval(interval.current);

      setLeft(delay);

      leftRef.current = delay;
    };
  }, deps);

  return {
    left
  };
};

export { useCountdown };
