import { render, screen } from '@testing-library/react';
import CityWeather from './index';
import { sampleWeatherAtLocation } from 'constants/seeds';

describe('CityWeather', () => {
  test('should render without crashing', () => {
    render(<CityWeather data={sampleWeatherAtLocation} />);

    const link = screen.getByTestId('CityWeather');
    expect(link).toBeVisible();
  });
});
