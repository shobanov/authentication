import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AuthApi } from '../../api/AuthApi';

export const useLogoutMutation = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useMutation('logout', () => AuthApi.logout(), {
		onSuccess: () => {
			localStorage.removeItem('token');
			queryClient.removeQueries('login');
			navigate('/login');
		},
	});
};
