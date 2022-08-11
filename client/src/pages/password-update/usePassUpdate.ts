import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '../../api/AuthApi';
import { PasswordUpdateDto } from '../../types';

export const usePassUpdateMutation = () => {
	const navigate = useNavigate();

	return useMutation(
		'passwordRecovery',
		(data: PasswordUpdateDto) => AuthApi.passwordUpdate(data),
		{
			onSuccess() {
				navigate('/login');
			},
		}
	);
};
