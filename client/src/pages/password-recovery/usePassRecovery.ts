import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse, PasswordRecoveryDto } from '../../types';

export const usePassRecoveryMutation = () => {
	const navigate = useNavigate();

	return useMutation<
		AxiosResponse,
		AxiosError<ErrorResponse>,
		PasswordRecoveryDto
	>('passwordRecovery', data => AuthApi.passwordRecovery(data), {
		onSuccess() {
			toast.success(
				'An email has been sent to your email to reset your password'
			);
			setTimeout(() => {
				navigate('/login');
			}, 2500);
		},
		onError(error) {
			toast.error(`${error.response?.data.message}`);
		},
	});
};
