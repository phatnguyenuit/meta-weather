import ipService from '../ip';

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

describe('IP Service', () => {
  test('should return success response', () => {
    const ipData = {
      ip: 'ip_address',
    };
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: ipData,
    });
    return ipService.detect().then((res) => {
      expect(res.kind).toBe('success');
      expect(res.data).toHaveProperty('ip', ipData.ip);
    });
  });

  test('should return failed response', () => {
    const errorResponse = {
      status: 400,
      data: {
        message: 'Failed to fetch',
      },
    };
    mockAxiosRequest.mockRejectedValue({
      response: errorResponse,
    });
    return ipService.detect().then((res) => {
      expect(res.kind).toBe('failed');
      expect(res.data).toHaveProperty('code', errorResponse.status);
      expect(res.data).toHaveProperty('message', errorResponse.data.message);
    });
  });
});
