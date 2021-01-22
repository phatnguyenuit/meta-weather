import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render with crashing', () => {
    render(<App />);
    expect(screen.getByTestId('LoadingPage')).toBeVisible();
    expect(screen.getByText(/weather app/gi)).toBeInTheDocument();
  });
});
