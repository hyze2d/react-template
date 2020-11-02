import { useHistory } from 'react-router';
import { parse } from 'querystring';
import { useMemo } from 'react';

/**
 * Retrun search string
 */
const useSearch = () => {
  const { search } = useHistory().location;

  return search.replace('?', '');
};

/**
 * Use query params from history search
 */
const useQuery = <T = any>() => {
  const search = useSearch();

  return (useMemo(() => parse(search.replace('?', '')), [search]) as any) as {
    [P in keyof T]: string | string[];
  };
};

export { useQuery, useSearch };
