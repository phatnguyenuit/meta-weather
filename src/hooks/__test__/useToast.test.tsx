import { renderHook, act } from '@testing-library/react-hooks';
import { OptionsObject, SnackbarProvider } from 'notistack';
import useToast, { getToastOption } from '../useToast';

const mockEnqueueSnackbar = jest.fn();
const mockCloseSnackbar = jest.fn();

jest.mock('notistack', () => {
  const actual = jest.requireActual('notistack');

  return {
    ...actual,
    useSnackbar: () => ({
      enqueueSnackbar: mockEnqueueSnackbar,
      closeSnackbar: mockCloseSnackbar,
    }),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

const setupTest = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <SnackbarProvider maxSnack={2}>{children}</SnackbarProvider>
  );
  const result = renderHook(() => useToast(), { wrapper });
  return result;
};

describe('useToast', () => {
  test('should work', () => {
    const { result } = setupTest();
    expect(typeof result.current.showToast).toBe('function');
    expect(typeof result.current.hideToast).toBe('function');
  });

  test('should call `enqueueSnackbar`', () => {
    const { result } = setupTest();
    const variant: OptionsObject['variant'] = 'error';
    const message = 'Error message';
    act(() => {
      result.current.showToast(message, variant);
    });
    expect(mockEnqueueSnackbar).toBeCalled();
    expect(mockEnqueueSnackbar).toHaveBeenCalledTimes(1);
    expect(mockEnqueueSnackbar).toHaveBeenCalledWith(
      message,
      getToastOption({ variant }),
    );
  });

  test('should call `closeSnackbar`', () => {
    const { result } = setupTest();
    act(() => {
      result.current.hideToast('key');
    });
    expect(mockCloseSnackbar).toBeCalled();
    expect(mockCloseSnackbar).toHaveBeenCalledTimes(1);
    expect(mockCloseSnackbar).toHaveBeenCalledWith('key');
  });
});
