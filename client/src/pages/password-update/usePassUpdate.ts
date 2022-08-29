import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse, PasswordUpdateDto } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';

export const usePassUpdateMutation = () => {
	const navigate = useNavigate();

	return useMutation<
		AxiosResponse,
		AxiosError<ErrorResponse>,
		PasswordUpdateDto
	>('passwordUpdate', data => AuthApi.passwordUpdate(data), {
		onSuccess() {
			navigate('/login');
		},
		onError(error) {
			errorNotify(error);
		},
	});
};
