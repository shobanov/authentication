import { useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';
import { AuthContext } from '../../context';

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const { setUserName, setIsAuth } = useContext(AuthContext);

  return useMutation<void, AxiosError<ErrorResponse>>(
    'logout',
    () => AuthApi.logout(),
    {
      onSuccess() {
        setUserName('');
        setIsAuth(false);
        navigate('/login');
      },
      onError(error) {
        errorNotify(error);
      },
    },
  );
};
