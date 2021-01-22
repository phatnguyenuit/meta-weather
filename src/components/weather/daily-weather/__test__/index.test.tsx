import { render, screen } from '@testing-library/react';
import { sampleWeatherAtLocation } from 'constants/seeds';
import DailyWeather from '../index';

describe('DailyWeather', () => {
  test('should render without crashing', () => {
    render(
      <DailyWeather
        weather={sampleWeatherAtLocation.consolidated_weather[0]}
        tz={sampleWeatherAtLocation.timezone}
      />,
    );
    expect(screen.getByTestId('DailyWeather')).toBeVisible();
  });
});
