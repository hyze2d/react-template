import { useRouteMatch } from 'react-router';

/**
 * Use routes with prefixes
 */
const usePrefixedRoutes = (paths: string[]) => {
  const { path } = useRouteMatch();

  return paths.map(item => path + '/' + item);
};

export { usePrefixedRoutes };
