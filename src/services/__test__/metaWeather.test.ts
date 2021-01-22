import {
  sampleWeatherLocation,
  sampleWeatherAtLocation,
} from 'constants/seeds';
import metaWeatherService from '../metaWeather';

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

describe('metaWeatherService', () => {
  describe('search location', () => {
    test('should return a list of locations by query', async () => {
      mockAxiosRequest.mockResolvedValue({
        status: 200,
        data: [sampleWeatherLocation],
      });
      const response = await metaWeatherService.search({
        value: 'san',
        field: 'query',
      });
      expect(response.kind).toBe('success');
      expect(response.data).toContain(sampleWeatherLocation);
    });

    test('should return a list of locations by latt long position', async () => {
      mockAxiosRequest.mockResolvedValue({
        status: 200,
        data: [sampleWeatherLocation],
      });
      const response = await metaWeatherService.search({
        value: '1,1',
        field: 'lattlong',
      });
      expect(response.kind).toBe('success');
      expect(response.data).toContain(sampleWeatherLocation);
    });
  });
  describe('get weather forecast at location by `woeid`', () => {
    test('should return weather forecast data for given location with `woeid`', async () => {
      mockAxiosRequest.mockResolvedValue({
        status: 200,
        data: sampleWeatherAtLocation,
      });
      const response = await metaWeatherService.get('123');
      expect(response.kind).toBe('success');
      expect(response.data).toHaveProperty(
        'title',
        sampleWeatherAtLocation.title,
      );
      expect(response.data).toHaveProperty(
        'woeid',
        sampleWeatherAtLocation.woeid,
      );
    });
  });
});
