import { Button } from '../../components';
import { GreetingWrapper } from './styles';

export const Greeting = () => {
	return (
		<GreetingWrapper>
			<h2>Congratulations, you have successfully logged in!</h2>
			<Button title='Logout' type='button' />
		</GreetingWrapper>
	);
};
