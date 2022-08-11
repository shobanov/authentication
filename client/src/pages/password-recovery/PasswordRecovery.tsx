import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Spinner } from '../../components';
import { schema } from './validation';
import { usePassRecoveryMutation } from './usePassRecovery';
import { PasswordRecoveryForm, PasswordRecoveryWrapper } from './styles';
import { PasswordRecoveryDto } from '../../types';

export const PasswordRecovery = () => {
	const { mutate, isLoading } = usePassRecoveryMutation();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<PasswordRecoveryDto>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<PasswordRecoveryDto> = data => {
		mutate(data);
	};

	return (
		<PasswordRecoveryWrapper>
			{isLoading && <Spinner />}
			<h2>
				Enter the email address associated with your account. Password reset
				instructions will be sent via email.
			</h2>
			<PasswordRecoveryForm onSubmit={handleFormSubmit(handleSubmit)}>
				<Input
					type='email'
					placeholder='Email address'
					validationError={errors.email?.message}
					{...register('email')}
				/>
				<Button title='recover password' type='submit' />
			</PasswordRecoveryForm>
		</PasswordRecoveryWrapper>
	);
};
