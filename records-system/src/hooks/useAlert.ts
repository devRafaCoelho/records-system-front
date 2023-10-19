import { ToastData } from '../types/types';

export function useAlert() {
  const alert = ({ type, message }: ToastData) => {
    switch (type) {
      case 'success':
        break;

      default:
        break;
    }
  };

  return { alert };
}
