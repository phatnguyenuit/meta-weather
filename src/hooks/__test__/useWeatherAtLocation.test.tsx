import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from 'states/store';
import { WOEID } from 'types/metaWeather';

import useWeatherAtLocation from '../useWeatherAtLocation';
import * as useActions from '../useActions';

const setupTest = (woeid?: WOEID) => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(() => useWeatherAtLocation(woeid), { wrapper });
  return result;
};

const spy_useActions = jest.spyOn(useActions, 'default');
const getWeatherAtLocationMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useWeatherAtLocation', () => {
  test('should work in the default case', () => {
    spy_useActions.mockReturnValue([getWeatherAtLocationMock]);
    const { result } = setupTest();

    expect(result.current.code).toBe(undefined);
    expect(result.current.data).toBe(undefined);
    expect(result.current.loading).toBe(undefined);
    expect(result.current.message).toBe(undefined);
  });

  test('should call `getWeatherAtLocation` in case having valid `woeid`', () => {
    spy_useActions.mockReturnValue([getWeatherAtLocationMock]);
    setupTest('123');

    expect(getWeatherAtLocationMock).toHaveBeenCalled();
  });

  test('should not call `getWeatherAtLocation` in case having invalid `woeid`', () => {
    spy_useActions.mockReturnValue([getWeatherAtLocationMock]);
    setupTest('invalid woeid');

    expect(getWeatherAtLocationMock).not.toHaveBeenCalled();
  });
});
