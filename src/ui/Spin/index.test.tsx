import { render, screen } from '@testing-library/react';

import Spin from './index';

describe('Spin', () => {
  test('should render without crashing', () => {
    render(<Spin />);
    expect(screen.getByTestId('Spin')).toBeVisible();
  });
});
