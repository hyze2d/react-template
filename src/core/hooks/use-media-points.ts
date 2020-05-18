import { useWindowSize } from './use-window-size';

/**
 * Use media points
 */
const useMediaPoints = (exact: boolean = false) => {
  let { width } = useWindowSize(null);
  let tablet = width >= 800;
  let desktop = width >= 1244;

  if (exact) {
    tablet = tablet && !desktop;
  }

  return {
    tablet,
    desktop,
    mobile: !tablet && !desktop
  };
};

export { useMediaPoints };
