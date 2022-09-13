import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { AuthResponse, ErrorResponse } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';

export const useRefreshTokenMutation = () => {
  const navigate = useNavigate();

  return useMutation<AxiosResponse<AuthResponse>, AxiosError<ErrorResponse>>(
    () => AuthApi.refreshToken(),
    {
      retry: 0,
      onSuccess({ data }) {
        localStorage.setItem('userName', data.user.firstName);
        localStorage.setItem('accessToken', data.accessToken);
      },
      onError(error) {
        errorNotify(error);
        localStorage.clear();
        navigate('/login');
      },
    },
  );
};
