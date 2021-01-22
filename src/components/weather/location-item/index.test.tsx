import { render, screen } from '@testing-library/react';
import { sampleWeatherLocation } from 'constants/seeds';
import LocationItem from './index';

describe('LocationItem', () => {
  test('should render without crashing', () => {
    render(<LocationItem location={sampleWeatherLocation} />);
    expect(screen.getByText(sampleWeatherLocation.title)).toBeVisible();
  });
});
