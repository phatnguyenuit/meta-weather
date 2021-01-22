import { useMemo } from 'react';
import { useLocation } from 'react-router';

const useQuery = () => {
  const location = useLocation();
  const query = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return Object.fromEntries(params.entries());
  }, [location.search]);
  return query;
};

export default useQuery;
