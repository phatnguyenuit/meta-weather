import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';

import { weatherPaths } from 'routes/paths';

import CityLink from './index';

const woeid = 1;
const cityPath = weatherPaths.weatherCity(woeid).path;
const textContent = 'test';
describe('CityLink', () => {
  test('should render without crashing', () => {
    render(
      <MemoryRouter>
        <CityLink woeid={woeid}>{textContent}</CityLink>
      </MemoryRouter>,
    );

    const link = screen.getByTestId('CityLink');
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', cityPath);
    expect(link).toHaveTextContent(textContent);
  });
});
