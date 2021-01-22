import { render, screen } from '@testing-library/react';
import NotFound from './index';

describe('NotFound', () => {
  test('should render without crashing', () => {
    render(<NotFound />);
    expect(screen.getByTestId('NotFound')).toBeVisible();
  });
});
