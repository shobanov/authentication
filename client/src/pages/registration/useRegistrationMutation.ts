import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthResponse, ErrorResponse, RegistrationDto } from '../../types';
import { AuthApi } from '../../api/AuthApi';
import { errorNotify } from '../../notifications/errorNotify';

export const useRegistrationMutation = () => {
	return useMutation<
		AxiosResponse<AuthResponse>,
		AxiosError<ErrorResponse>,
		RegistrationDto
	>(
		'registration',
		registrationData => AuthApi.registration(registrationData),
		{
			onError(error) {
				errorNotify(error);
			},
		}
	);
};