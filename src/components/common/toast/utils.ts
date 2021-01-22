import { useEffect } from 'react';
import useToast from 'hooks/useToast';
import toastService from 'services/toast';

export const useToastEffect = () => {
  const { showToast } = useToast();

  useEffect(() => {
    toastService.addListener(showToast);
    return () => toastService.removeListener(showToast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
