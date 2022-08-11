import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '../../api/AuthApi';
import { PasswordRecoveryDto } from '../../types';

export const usePassRecoveryMutation = () => {
	const navigate = useNavigate();

	return useMutation(
		'passwordRecovery',
		(data: PasswordRecoveryDto) => AuthApi.passwordRecovery(data),
		{
			onSuccess() {
				navigate('/login');
			},
		}
	);
};
