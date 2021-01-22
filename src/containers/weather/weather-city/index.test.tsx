import * as module from 'react-router';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from 'states/store';
import { INVALID_WOEID_MESSAGE } from 'constants/common';
import { sampleWeatherAtLocation } from 'constants/seeds';
import * as useWeatherAtLocation from 'hooks/useWeatherAtLocation';
import WeatherCity from './index';

const mock_useParams = jest.fn();
const spy_useWeatherAtLocation = jest.spyOn(useWeatherAtLocation, 'default');

jest.mock('react-router', () => {
  const actual = jest.requireActual('react-router');
  return {
    ...actual,
    useParams: () => mock_useParams(),
  };
});

const setupTest = () => {
  render(
    <Provider store={store}>
      <module.MemoryRouter>
        <WeatherCity />
      </module.MemoryRouter>
    </Provider>,
  );
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('WeatherCity', () => {
  // Case 1: Default case
  test('should render without crash', () => {
    mock_useParams.mockReturnValue({
      woeid: '',
    });
    spy_useWeatherAtLocation.mockReturnValue({});
    setupTest();
    expect(screen.getByTestId('WeatherCity')).toBeVisible();
  });

  // Case 2: Valid woeid and show loading
  test('should render loading to search location by `woeid`', () => {
    mock_useParams.mockReturnValue({
      woeid: '123',
    });
    spy_useWeatherAtLocation.mockReturnValue({
      loading: true,
    });
    setupTest();
    expect(screen.getByTestId('WeatherCity')).toBeVisible();
    expect(screen.getByTestId('LoadingPage')).toBeVisible();
  });

  // Case 3: Invalid woeid
  test(`should render "${INVALID_WOEID_MESSAGE}" in case invalid 'woeid'`, () => {
    mock_useParams.mockReturnValue({
      woeid: 'abc',
    });
    spy_useWeatherAtLocation.mockReturnValue({});
    setupTest();
    expect(screen.getByTestId('WeatherCity')).toBeVisible();
    expect(screen.getByText(INVALID_WOEID_MESSAGE)).toBeVisible();
  });

  // Case 4: With current weather data
  test(`should render data in case having current weather data`, () => {
    mock_useParams.mockReturnValue({
      woeid: '123',
    });
    spy_useWeatherAtLocation.mockReturnValue({
      data: sampleWeatherAtLocation,
    });
    setupTest();
    expect(screen.getByTestId('WeatherCity')).toBeVisible();
    expect(screen.getByText(sampleWeatherAtLocation.title)).toBeVisible();
  });

  // Case 5: With current weather error
  test(`should render error message in case failed to fetch current weather data`, () => {
    const errorMessage = 'Failed to fetch';
    mock_useParams.mockReturnValue({
      woeid: '123',
    });
    spy_useWeatherAtLocation.mockReturnValue({
      message: errorMessage,
    });
    setupTest();
    expect(screen.getByTestId('WeatherCity')).toBeVisible();
    expect(screen.getByText(errorMessage)).toBeVisible();
  });
});
