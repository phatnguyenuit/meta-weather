import { renderHook } from '@testing-library/react-hooks';
import { sampleLocation as mockPosition } from 'constants/seeds';
import useLocalLocation from '../useLocalLocation';

const setupTest = () => {
  const result = renderHook(() => useLocalLocation());
  return result;
};

describe('useLocalLocation', () => {
  test('should work', () => {
    const { result } = setupTest();
    expect(result.current.location).toBe(undefined);
    expect(result.current.error).toBe(undefined);
  });

  test('should return location', async () => {
    Object.defineProperty(global.navigator, 'geolocation', {
      writable: true,
      value: {
        getCurrentPosition: (success: Function) => {
          setTimeout(() => {
            success(mockPosition);
          });
        },
      },
    });
    const { result, waitForNextUpdate } = setupTest();
    let { location, error } = result.current;

    expect(location).toBe(undefined);
    expect(error).toBe(undefined);

    await waitForNextUpdate();

    ({ location, error } = result.current);

    expect(location).toHaveProperty('latt', mockPosition.coords.latitude);
    expect(location).toHaveProperty('long', mockPosition.coords.longitude);
    expect(error).toBe(undefined);
  });

  test('should return error', async () => {
    const errorMessage = 'User denied Geolocation.';
    Object.defineProperty(global.navigator, 'geolocation', {
      writable: true,
      value: {
        getCurrentPosition: (_: Function, error: Function) => {
          setTimeout(() => {
            error({
              message: errorMessage,
            });
          });
        },
      },
    });
    const { result, waitForNextUpdate } = setupTest();
    let { location, error } = result.current;

    expect(location).toBe(undefined);
    expect(error).toBe(undefined);

    await waitForNextUpdate();

    ({ location, error } = result.current);
    expect(error).toHaveProperty('message', errorMessage);
  });
});
