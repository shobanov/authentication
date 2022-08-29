import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import { GreetingWrapper } from './styles';
import { Button } from '../../components';
import { useLogoutMutation } from './useLogoutMutation';
import { AuthContext } from '../../context';
import { useCheckAuth } from '../../hooks/useCheckAuth';

export const Greeting = () => {
	useCheckAuth();
	const { userName } = useContext(AuthContext);
	const { mutate, isLoading, isSuccess } = useLogoutMutation();

	const handleLogoutClick = () => {
		mutate();
	};

	return (
		<GreetingWrapper>
			<ToastContainer limit={1} />
			<Button
				type='button'
				onClick={handleLogoutClick}
				disabled={isLoading || isSuccess}
				isLoading={isLoading}
			>
				Logout
			</Button>

			<h2>Congratulations {userName}, you have successfully logged in!</h2>
		</GreetingWrapper>
	);
};
