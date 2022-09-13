import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';

export const useLogoutMutation = () => {
  const navigate = useNavigate();

  return useMutation<void, AxiosError<ErrorResponse>>(() => AuthApi.logout(), {
    onSuccess() {
      navigate('/login');
    },
    onError(error) {
      errorNotify(error);
    },
    onSettled() {
      localStorage.clear();
    },
  });
};
