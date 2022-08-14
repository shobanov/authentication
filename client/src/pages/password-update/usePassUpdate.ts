import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse, PasswordUpdateDto } from '../../types';

export const usePassUpdateMutation = () => {
	const navigate = useNavigate();

	return useMutation<
		AxiosResponse,
		AxiosError<ErrorResponse>,
		PasswordUpdateDto
	>('passwordUpdate', data => AuthApi.passwordUpdate(data), {
		onSuccess() {
			toast.success('password changed successfully!');

			setTimeout(() => {
				navigate('/login');
			}, 2500);
		},
		onError(error) {
			toast.error(`${error.response?.data.message}`);
		},
	});
};
