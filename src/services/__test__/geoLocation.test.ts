import { sampleLocationByIP } from 'constants/seeds';
import geoLocationService from '../geoLocation';

const mockAxiosRequest = jest.fn();

jest.mock('axios', () => {
  const actual = jest.requireActual('axios');

  return {
    ...actual,
    create: () => ({
      request: () => mockAxiosRequest(),
    }),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('GeoLocation Service', () => {
  test('should return success response', () => {
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: sampleLocationByIP,
    });
    const ip = 'test.ip';
    return geoLocationService.detect(ip).then((res) => {
      expect(res.kind).toBe('success');
      expect(res.data).toHaveProperty(
        'location.city',
        sampleLocationByIP.location.city,
      );
    });
  });

  test('should return cached success response', async () => {
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: sampleLocationByIP,
    });

    const ip = 'test2.ip';
    const firstResponse = await geoLocationService.detect(ip);

    expect(firstResponse.kind).toBe('success');
    expect(firstResponse.data).toHaveProperty(
      'location.city',
      sampleLocationByIP.location.city,
    );
    expect(mockAxiosRequest).toBeCalled();
    expect(mockAxiosRequest).toBeCalledTimes(1);

    const secondResponse = await geoLocationService.detect(ip);
    expect(secondResponse.kind).toBe('success');
    expect(secondResponse.data).toHaveProperty(
      'location.city',
      sampleLocationByIP.location.city,
    );
    // Still call `mockAxiosRequest` one time.
    // It means not use mockAxiosRequest to request data.
    // Use cached response instead.
    expect(mockAxiosRequest).toBeCalledTimes(1);
  });

  test('should return failed response', async () => {
    const errorResponse = {
      status: 400,
      data: {
        message: 'Failed to fetch',
      },
    };
    mockAxiosRequest.mockRejectedValue({
      response: errorResponse,
    });

    const res = await geoLocationService.detect(sampleLocationByIP.ip);
    expect(res.kind).toBe('failed');
    expect(res.data).toHaveProperty('code', errorResponse.status);
    expect(res.data).toHaveProperty('message', errorResponse.data.message);
  });

  test('should return failed response with an internal error message', async () => {
    const errorResponse = {
      message: 'Internal error message',
    };
    mockAxiosRequest.mockRejectedValue(errorResponse);

    const res = await geoLocationService.detect(sampleLocationByIP.ip);
    expect(res.kind).toBe('failed');
    expect(res.data).toHaveProperty('code', 0);
    expect(res.data).toHaveProperty('message', errorResponse.message);
  });

  test('should return failed response with unknown error message', async () => {
    const errorResponse = {};
    mockAxiosRequest.mockRejectedValue(errorResponse);

    const res = await geoLocationService.detect(sampleLocationByIP.ip);
    expect(res.kind).toBe('failed');
    expect(res.data).toHaveProperty('code', 0);
    expect(res.data).toHaveProperty('message', 'Unknown error');
  });
});
