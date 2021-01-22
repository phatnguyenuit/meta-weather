import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import WeatherApp from './index';

describe('WeatherApp', () => {
  test('should render without crashing', () => {
    render(
      <MemoryRouter>
        <WeatherApp />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('WeatherApp')).toBeVisible();
  });
  test('should navigate to search page after entered value into search input', () => {
    render(
      <MemoryRouter>
        <WeatherApp />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('WeatherApp')).toBeVisible();

    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, {
      target: {
        value: 'san',
      },
    });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    expect(searchInput).toHaveValue('san');

    // Expect loading page appear before getting results
    const searchForm = screen.getByTestId('searchForm');
    fireEvent.submit(searchForm);

    expect(screen.getByTestId('LoadingPage')).toBeVisible();
  });
});
