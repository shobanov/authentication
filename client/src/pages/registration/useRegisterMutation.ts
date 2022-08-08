import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { RegisterDto } from '../../types';

import { AuthApi } from '../../api/AuthApi';

export const useRegisterMutation = () => {
	const navigate = useNavigate();

	return useMutation(
		'login',
		(registrationData: RegisterDto) => AuthApi.registration(registrationData),
		{
			onSuccess({ data }) {
				localStorage.setItem('token', data.data.accessToken);
				navigate('/login');
			},
		}
	);
};
