import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from 'states/store';
import { SearchLocationPayload } from 'services/metaWeather';
import { sampleWeatherLocation } from 'constants/seeds';

import useCurrentWeather from '../useCurrentWeather';
import * as useLocationSearchParams from '../useLocationSearchParams';
import * as useSearchWeatherLocation from '../useSearchWeatherLocation';
import * as useWeatherAtLocation from '../useWeatherAtLocation';

const setupTest = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(() => useCurrentWeather(), { wrapper });
  return result;
};

const spy_useLocationSearchParams = jest.spyOn(
  useLocationSearchParams,
  'default',
);
const spy_useSearchWeatherLocation = jest.spyOn(
  useSearchWeatherLocation,
  'default',
);
const spy_useWeatherAtLocation = jest.spyOn(useWeatherAtLocation, 'default');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useCurrentWeather', () => {
  test('should work in default case', () => {
    spy_useSearchWeatherLocation.mockReturnValue({});
    spy_useWeatherAtLocation.mockReturnValue({});
    const { result } = setupTest();

    expect(result.current.code).toBe(undefined);
    expect(result.current.data).toBe(undefined);
    expect(result.current.loading).toBe(false);
    expect(result.current.message).toBe(undefined);
  });

  test('should call `useSearchWeatherLocation` in case having params', () => {
    const params: SearchLocationPayload = {
      value: 'san',
      field: 'query',
    };
    spy_useLocationSearchParams.mockReturnValue(params);
    spy_useSearchWeatherLocation.mockReturnValue({});
    spy_useWeatherAtLocation.mockReturnValue({});
    const { result } = setupTest();

    expect(result.current.code).toBe(undefined);
    expect(result.current.data).toBe(undefined);
    expect(result.current.loading).toBe(false);
    expect(result.current.message).toBe(undefined);

    expect(spy_useSearchWeatherLocation).toBeCalledWith(
      ...Object.values(params),
    );
  });

  test('should call `useWeatherAtLocation` in case having woeid', () => {
    const params: SearchLocationPayload = {
      value: 'san',
      field: 'query',
    };
    spy_useLocationSearchParams.mockReturnValue(params);
    spy_useSearchWeatherLocation.mockReturnValue({
      data: [sampleWeatherLocation],
    });
    spy_useWeatherAtLocation.mockReturnValue({});

    const { result } = setupTest();

    expect(result.current.code).toBe(undefined);
    expect(result.current.data).toBe(undefined);
    expect(result.current.loading).toBe(false);
    expect(result.current.message).toBe(undefined);

    expect(spy_useSearchWeatherLocation).toBeCalledWith(
      ...Object.values(params),
    );
    expect(spy_useWeatherAtLocation).toBeCalledWith(
      sampleWeatherLocation.woeid,
    );
  });
});
