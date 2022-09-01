import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ErrorResponse } from '../types';

export const errorNotify = (error: AxiosError<ErrorResponse>) => {
  toast.error(`${error.response?.data.message}`, {
    position: 'top-center',
    autoClose: 2000,
    toastId: 1,
  });

  toast.clearWaitingQueue({ containerId: 1 });
};
