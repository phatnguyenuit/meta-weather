import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from 'states/store';
import { sampleWeatherAtLocation } from 'constants/seeds';
import * as useCurrentWeather from 'hooks/useCurrentWeather';
import Dashboard from './index';

const spy_useCurrentWeather = jest.spyOn(useCurrentWeather, 'default');
const setupTest = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </Provider>,
  );
};

describe('Dashboard', () => {
  // Case 1: Default case without data
  test('should render without crash', () => {
    spy_useCurrentWeather.mockReturnValue({
      data: undefined,
      loading: false,
    });
    setupTest();
    expect(screen.getByTestId('Dashboard')).toBeVisible();
  });

  // Case 2: With data
  test('should render with data', () => {
    spy_useCurrentWeather.mockReturnValue({
      data: sampleWeatherAtLocation,
      loading: false,
    });
    setupTest();
    expect(screen.getByTestId('Dashboard')).toBeVisible();
    expect(screen.getByText(sampleWeatherAtLocation.title)).toBeVisible();
  });
});
