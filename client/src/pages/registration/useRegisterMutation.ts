import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { AuthResponse, ErrorResponse, RegisterDto } from '../../types';
import { AuthApi } from '../../api/AuthApi';

export const useRegisterMutation = () => {
	const navigate = useNavigate();

	return useMutation<
		AxiosResponse<AuthResponse>,
		AxiosError<ErrorResponse>,
		RegisterDto
	>(
		'registration',
		registrationData => AuthApi.registration(registrationData),
		{
			onSuccess() {
				toast.success('Please check your mail !');

				setTimeout(() => {
					navigate('/login');
				}, 2500);
			},
			onError(error) {
				toast.error(`${error.response?.data.message}`);
			},
		}
	);
};
