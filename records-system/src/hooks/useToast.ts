import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastData } from '../types/types';

export function useToast() {
  const toastfy = ({ type, message }: ToastData) => {
    switch (type) {
      case 'success':
        toast.success(message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        break;
      case 'warning':
        toast.warning(message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
        break;
      default:
        break;
    }
  };

  return { toastfy };
}
