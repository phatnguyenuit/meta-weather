import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from 'states/store';
import { SearchLocationPayload } from 'services/metaWeather';

import useSearchWeatherLocation from '../useSearchWeatherLocation';
import * as useActions from '../useActions';

const setupTest = (
  value?: SearchLocationPayload['value'],
  field?: SearchLocationPayload['field'],
) => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(() => useSearchWeatherLocation(value, field), {
    wrapper,
  });
  return result;
};

const spy_useActions = jest.spyOn(useActions, 'default');
const searchWeatherLocationMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useSearchWeatherLocation', () => {
  test('should work in the default case', () => {
    spy_useActions.mockReturnValue([searchWeatherLocationMock]);
    const { result } = setupTest();

    expect(result.current.code).toBe(undefined);
    expect(result.current.data).toBe(undefined);
    expect(result.current.loading).toBe(undefined);
    expect(result.current.message).toBe(undefined);
    expect(searchWeatherLocationMock).not.toHaveBeenCalled();
  });

  test('should call `searchWeatherLocation` in case having valid `value` and `field`', () => {
    spy_useActions.mockReturnValue([searchWeatherLocationMock]);
    setupTest('san', 'query');

    expect(searchWeatherLocationMock).toHaveBeenCalled();
  });
});
