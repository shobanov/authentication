import { useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { AuthResponse, ErrorResponse, LoginDto } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';
import { AuthContext } from '../../context';

export const useLoginMutation = () => {
	const navigate = useNavigate();
	const { setUserName, setIsAuth } = useContext(AuthContext);

	return useMutation<
		AxiosResponse<AuthResponse>,
		AxiosError<ErrorResponse>,
		LoginDto
	>('login', data => AuthApi.login(data), {
		onSuccess({ data }) {
			setUserName(data.data.user.firstName);
			setIsAuth(true);
			navigate('/greeting');
		},
		onError(error) {
			errorNotify(error);
		},
	});
};
