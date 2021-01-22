import { getWeatherIcon } from '../metaWeather';

describe('metaWeather', () => {
  describe('getWeatherIcon', () => {
    test('should work', () => {
      const expectedResult = `https://www.metaweather.com/static/img/weather/sn.svg`;
      expect(getWeatherIcon('sn')).toBe(expectedResult);
    });
  });
});
