import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import Toast from './index';

describe('Toast', () => {
  test('should render without crashing', () => {
    render(
      <SnackbarProvider>
        <Toast />
      </SnackbarProvider>,
    );
  });
});
