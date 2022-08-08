import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { Button, Spinner } from '../../components';
import { AuthApi } from '../../api/AuthApi';
import { GreetingWrapper } from './styles';
import { IUser } from '../../types';
// import { IUser } from '../../types';

export const Greeting = () => {
	const queryClient = useQueryClient();
	// const queryData = queryClient.getQueryData<IUser>('login');
	const navigate = useNavigate();

	const { isLoading, mutateAsync } = useMutation(
		'logout',
		() => AuthApi.logout(),
		{
			onSuccess: () => {
				localStorage.removeItem('token');
				queryClient.removeQueries('login');
				navigate('/login');
			},
		}
	);

	/*
	const userName = Object.values(
		jwt_decode(localStorage.getItem('token') as string) as []
	)[1];
	*/

	const userName = (() => {
		const token = localStorage.getItem('token') ?? '';
		const { firstName } = jwt_decode(token) as IUser;

		return firstName;
	})();

	return (
		<GreetingWrapper>
			{isLoading && <Spinner />}
			<Button
				title='Logout'
				type='button'
				handler={() => mutateAsync()}
				disabled={isLoading}
			/>
			<h2>
				{`Congratulations ${userName}, you have successfully logged
				in!`}
			</h2>
		</GreetingWrapper>
	);
};
