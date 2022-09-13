import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { AuthResponse, ErrorResponse, LoginDto } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation<
    AxiosResponse<AuthResponse>,
    AxiosError<ErrorResponse>,
    LoginDto
  >((data) => AuthApi.login(data), {
    onSuccess({ data }) {
      localStorage.setItem('userName', data.user.firstName);
      localStorage.setItem('accessToken', data.accessToken);
      navigate('/greeting');
    },
    onError(error) {
      errorNotify(error);
    },
  });
};
