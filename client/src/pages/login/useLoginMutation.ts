import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { LoginDto } from '../../types';

import { AuthApi } from '../../api/AuthApi';

export const useLoginMutation = () => {
	const navigate = useNavigate();

	return useMutation(
		'login',
		(loginData: LoginDto) => AuthApi.login(loginData),
		{
			onSuccess({ data }) {
				localStorage.setItem('token', data.data.accessToken);
				navigate('/greeting');
			},
		}
	);
};
