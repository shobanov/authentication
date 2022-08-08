import jwt_decode from 'jwt-decode';

import { IUser } from '../../types';
import { GreetingWrapper } from './styles';
import { Button, Spinner } from '../../components';
import { useLogoutMutation } from './useLogoutMutation';

export const Greeting = () => {
	const { mutate, isLoading } = useLogoutMutation();

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
				handler={() => mutate()}
				disabled={isLoading}
			/>
			<h2>
				{`Congratulations ${userName}, you have successfully logged
				in!`}
			</h2>
		</GreetingWrapper>
	);
};
