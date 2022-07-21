import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input, Title } from '../../components';
import { PasswordRecoveryForm, PasswordRecoveryWrapper } from './styles';

type Inputs = { email: string };

export const PasswordRecovery = () => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	return (
		<PasswordRecoveryWrapper>
			<Title title='Enter the email address associated with your account. Password reset instructions will be sent via email.' />
			<PasswordRecoveryForm onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='email'
					placeholder='Email address'
					{...register('email')}
				/>
				<Button title='Email me the instructions' type='submit' />
			</PasswordRecoveryForm>
		</PasswordRecoveryWrapper>
	);
};
