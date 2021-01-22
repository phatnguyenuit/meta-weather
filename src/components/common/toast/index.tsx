import { FC, memo } from 'react';
import { useToastEffect } from './utils';

export const ToastComponent: FC = () => {
  useToastEffect();
  return null;
};

const Toast = memo(ToastComponent);
Toast.displayName = 'Toast';
export default Toast;
