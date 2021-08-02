import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from 'states/store';
import { sampleLocation as mockLocation } from 'constants/seeds';

import useLocationSearchParams from '../useLocationSearchParams';

const mock_useLocalLocation = jest.fn();
const mock_useIp = jest.fn();
const mock_useLocationByIP = jest.fn();

const detectIpMock = jest.fn();
const detectLocationByIPMock = jest.fn();

jest.mock('../useLocalLocation', () => {
  return () => mock_useLocalLocation();
});

jest.mock('../useIp', () => {
  return () => mock_useIp();
});

jest.mock('../useLocationByIP', () => {
  return () => mock_useLocationByIP();
});

const defaultLocalLocationValues = {
  location: undefined,
  error: undefined,
};

const defaultIpValues = {
  ip: undefined,
  detectIp: detectIpMock,
  loading: undefined,
  message: undefined,
};

const defaultLocationByIpValues = {
  location: undefined,
  detectLocationByIP: detectLocationByIPMock,
};

const setupTest = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(() => useLocationSearchParams(), { wrapper });
  return result;
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useLocationSearchParams', () => {
  test('should work', () => {
    mock_useIp.mockReturnValue(defaultIpValues);
    mock_useLocalLocation.mockReturnValue(defaultLocalLocationValues);
    mock_useLocationByIP.mockReturnValue(defaultLocationByIpValues);

    const { result } = setupTest();
    expect(result.current).toBe(undefined);
  });
  test('should return lattlong params in case having local location', () => {
    const { latitude, longitude } = mockLocation.coords;

    mock_useIp.mockReturnValue(defaultIpValues);
    mock_useLocationByIP.mockReturnValue(defaultLocationByIpValues);
    mock_useLocalLocation.mockReturnValue({
      location: {
        latt: latitude,
        long: longitude,
      },
      error: undefined,
    });
    const { result } = setupTest();
    expect(result.current?.field).toBe('lattlong');
    expect(result.current?.value).toBe(`${latitude},${longitude}`);
  });

  test('should call detectIP in case local location error', () => {
    mock_useIp.mockReturnValue(defaultIpValues);
    mock_useLocationByIP.mockReturnValue(defaultLocationByIpValues);
    mock_useLocalLocation.mockReturnValue({
      location: undefined,
      error: {
        message: 'error',
      },
    });

    const { result } = setupTest();
    expect(result.current).toBe(undefined);
    expect(detectIpMock).toBeCalled();
  });

  test('should call detectLocationByIP in case having ip', () => {
    mock_useLocationByIP.mockReturnValue(defaultLocationByIpValues);
    mock_useLocalLocation.mockReturnValue(defaultLocationByIpValues);
    mock_useIp.mockReturnValue({
      ...defaultIpValues,
      ip: 'ip',
    });

    const { result } = setupTest();
    expect(result.current).toBe(undefined);
    expect(detectLocationByIPMock).toBeCalled();
  });

  test('should return query params after detected location by ip', () => {
    mock_useIp.mockReturnValue(defaultIpValues);
    mock_useLocalLocation.mockReturnValue(defaultLocationByIpValues);
    mock_useLocationByIP.mockReturnValue({
      ...defaultLocationByIpValues,
      location: {
        city: 'example city',
        lat: 'latitude',
        lng: 'longitude',
      },
    });

    const { result } = setupTest();
    expect(result.current).toHaveProperty('field', 'lattlong');
    expect(result.current).toHaveProperty('value', `latitude,longitude`);
  });
});
