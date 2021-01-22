import { useCallback } from 'react';
import { useSnackbar, OptionsObject } from 'notistack';

const baseToastOptions: OptionsObject = {
  preventDuplicate: true,
  anchorOrigin: { vertical: 'top', horizontal: 'center' },
};

export const getToastOption = (options?: OptionsObject) => ({
  ...baseToastOptions,
  ...options,
});

const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = useCallback(
    (message: string, variant: OptionsObject['variant']) =>
      enqueueSnackbar(message, getToastOption({ variant })),
    [enqueueSnackbar],
  );

  const hideToast = useCallback(
    (key: string | number | undefined) => closeSnackbar(key),
    [closeSnackbar],
  );

  return { showToast, hideToast };
};

export default useToast;
