import { useRouteMatch } from 'react-router';

/**
 * Use routes with prefixes
 */
const usePrefixedRoutes = (paths: string[], base: string = '') => {
  const { path } = useRouteMatch();

  return paths.map(item => base + path + item);
};

export { usePrefixedRoutes };
