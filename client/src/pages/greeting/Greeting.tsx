import { Button, Spinner } from '../../components';
import { AuthApi } from '../../api/AuthApi';
import { GreetingWrapper } from './styles';

import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const Greeting = () => {
	const navigate = useNavigate();

	const { isLoading, mutateAsync, data } = useMutation(
		'logout',
		() => AuthApi.logout(),
		{
			onSuccess: () => {
				localStorage.removeItem('token');
				navigate('/login');
			},
		}
	);

	// 	const name = data.

	return (
		<GreetingWrapper>
			{isLoading && <Spinner />}
			<Button
				title='Logout'
				type='button'
				handler={() => mutateAsync()}
				disabled={isLoading}
			/>
			<h2>Congratulations, you have successfully logged in!</h2>
		</GreetingWrapper>
	);
};
