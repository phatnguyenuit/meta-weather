import { render, screen } from '@testing-library/react';
import LoadingPage from './index';

describe('LoadingPage', () => {
  test('should render without crashing', () => {
    render(<LoadingPage />);
    expect(screen.getByTestId('LoadingPage')).toBeVisible();
  });
});
