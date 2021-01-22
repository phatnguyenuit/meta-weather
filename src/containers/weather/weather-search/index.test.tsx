import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import * as useQuery from 'hooks/useQuery';
import * as useSearchWeatherLocation from 'hooks/useSearchWeatherLocation';

import store from 'states/store';
import { sampleWeatherLocation } from 'constants/seeds';
import WeatherSearch from './index';

const spy_useQuery = jest.spyOn(useQuery, 'default');
const spy_useSearchWeatherLocation = jest.spyOn(
  useSearchWeatherLocation,
  'default',
);

const setupTest = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <WeatherSearch />
      </MemoryRouter>
    </Provider>,
  );
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('WeatherSearch', () => {
  // Case 1: given empty query to search
  test('should render without crash', () => {
    spy_useQuery.mockReturnValue({});
    spy_useSearchWeatherLocation.mockReturnValue({});
    setupTest();

    expect(screen.getByTestId('WeatherSearch')).toBeVisible();
    expect(screen.getByText('Please input query to search!')).toBeVisible();
  });

  // Case 2: given valid query to search
  test('should render searching page', () => {
    const query = 'san';
    spy_useQuery.mockReturnValue({ query });
    spy_useSearchWeatherLocation.mockReturnValue({ loading: true });
    setupTest();

    const regex = new RegExp(`Searching keyword "${query}"....`);
    expect(screen.getByTestId('WeatherSearch')).toBeVisible();
    expect(screen.getByText(regex)).toBeVisible();
  });

  // Case 3: given valid query to search and got response
  test('should render data page', () => {
    const query = 'san';
    spy_useQuery.mockReturnValue({ query });
    spy_useSearchWeatherLocation.mockReturnValue({
      data: [sampleWeatherLocation],
    });

    setupTest();

    expect(screen.getByTestId('WeatherSearch')).toBeVisible();
    expect(screen.getByText(sampleWeatherLocation.title)).toBeVisible();
    expect(screen.getByText(`Total found: 1 result(s)`)).toBeVisible();
  });
});
