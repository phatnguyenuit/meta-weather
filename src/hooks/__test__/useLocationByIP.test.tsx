import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from 'states/store';

import useLocationByIP from '../useLocationByIP';
import * as useActions from '../useActions';

const setupTest = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(() => useLocationByIP(), { wrapper });
  return result;
};

const spy_useActions = jest.spyOn(useActions, 'default');
const detectLocationByIPMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useLocationByIP', () => {
  test('should work', () => {
    spy_useActions.mockReturnValue([detectLocationByIPMock]);
    const { result } = setupTest();

    expect(result.current.detectLocationByIP).toBe(detectLocationByIPMock);

    act(() => {
      result.current.detectLocationByIP('ip');
    });

    expect(detectLocationByIPMock).toHaveBeenCalled();
    expect(detectLocationByIPMock).toHaveBeenCalledWith('ip');
  });
});
