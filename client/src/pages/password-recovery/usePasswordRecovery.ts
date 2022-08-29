import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse, PasswordRecoveryDto } from '../../types';
import { errorNotify } from '../../notifications/errorNotify';

export const usePasswordRecoveryMutation = () => {
	return useMutation<
		AxiosResponse,
		AxiosError<ErrorResponse>,
		PasswordRecoveryDto
	>('passwordRecovery', data => AuthApi.passwordRecovery(data), {
		onError(error) {
			errorNotify(error);
		},
	});
};
