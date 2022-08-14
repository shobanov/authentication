import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { AuthApi } from '../../api/AuthApi';
import { ErrorResponse } from '../../types';

export const useLogoutMutation = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useMutation<void, AxiosError<ErrorResponse>>(
		'logout',
		() => AuthApi.logout(),
		{
			onSuccess() {
				localStorage.removeItem('token');
				queryClient.removeQueries('login');
				navigate('/login');
			},
			onError(error) {
				toast.error(`${error.response?.data.message}`);
			},
		}
	);
};
