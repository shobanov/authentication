import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { AuthApi } from '../../api/AuthApi';
import { AuthResponse, ErrorResponse, LoginDto } from '../../types';

export const useLoginMutation = () => {
	const navigate = useNavigate();

	return useMutation<
		AxiosResponse<AuthResponse>,
		AxiosError<ErrorResponse>,
		LoginDto
	>('login', data => AuthApi.login(data), {
		onSuccess({ data }) {
			toast.success('you have successfully logged in!');
			localStorage.setItem('token', data.data.accessToken);
			setTimeout(() => {
				navigate('/greeting');
			}, 2500);
		},
		onError(error) {
			toast.error(`${error.response?.data.message}`);
		},
	});
};
