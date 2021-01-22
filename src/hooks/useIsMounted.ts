import { useState } from 'react';
import useDidMount from './useDidMount';

/**
 * Check if component mounted
 * @return {boolean} isMounted
 */
const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false);
  useDidMount(() => {
    setIsMounted(true);
  });
  return isMounted;
};

export default useIsMounted;
