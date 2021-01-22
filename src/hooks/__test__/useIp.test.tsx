import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from 'states/store';

import useIp from '../useIp';
import * as useActions from '../useActions';

const setupTest = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(() => useIp(), { wrapper });
  return result;
};

const spy_useActions = jest.spyOn(useActions, 'default');
const detectIpMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useIp', () => {
  test('should work', () => {
    spy_useActions.mockReturnValue([detectIpMock]);
    const { result } = setupTest();

    expect(result.current.detectIp).toBe(detectIpMock);

    act(() => {
      result.current.detectIp();
    });

    expect(detectIpMock).toHaveBeenCalled();
  });
});
