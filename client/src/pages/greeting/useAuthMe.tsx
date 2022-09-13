import { useMutation, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '../../api/AuthApi';
import { AuthResponse, ErrorResponse } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';

export const useAuthMeQuery = () => {
  const navigate = useNavigate();

  const refreshTokenMutation = useMutation<
    AxiosResponse<AuthResponse>,
    AxiosError<ErrorResponse>
  >(() => AuthApi.refreshToken(), {
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
  });

  return useQuery<AxiosResponse, AxiosError<ErrorResponse>>(
    'authMe',
    () => AuthApi.me(),
    {
      retry: 0,
      onError: () => {
        refreshTokenMutation.mutate();
      },
    },
  );
};
