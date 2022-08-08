import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from './validation';
import { RegisterDto } from '../../types';
import { useRegisterMutation } from './useRegisterMutation';
import { Button, Checkbox, Input, Spinner } from '../../components';
import {
	RegistrationForm,
	Nav,
	Link,
	NameContainer,
	RegistrationWrapper,
} from './styles';

export const Registration = () => {
	const { mutate, isLoading } = useRegisterMutation();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<RegisterDto>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<RegisterDto> = RegistrationData => {
		mutate(RegistrationData);
	};

	return (
		<RegistrationWrapper>
			{isLoading && <Spinner />}
			<h2>Sign up</h2>
			<RegistrationForm onSubmit={handleFormSubmit(handleSubmit)}>
				<NameContainer>
					<Input
						type='text'
						placeholder='First Name *'
						validationError={errors.firstName?.message}
						{...register('firstName')}
					/>
					<Input
						type='text'
						placeholder='Last Name *'
						validationError={errors.lastName?.message}
						{...register('lastName')}
					/>
				</NameContainer>
				<Input
					type='text'
					placeholder='Email Address *'
					validationError={errors.email?.message}
					{...register('email')}
				/>
				<Input
					type='password'
					placeholder='Password *'
					validationError={errors.password?.message}
					{...register('password')}
				/>
				<Checkbox label='I want to receive inspiration, marketing promotions and updates via email.' />
				<Button title='SIGN UP' type='submit' disabled={isLoading} />
				<Nav>
					<Link to='/login'>Already have an account? Sign in</Link>
				</Nav>
			</RegistrationForm>
		</RegistrationWrapper>
	);
};
