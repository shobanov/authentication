import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';

import { schema } from './validation';
import { RegisterDto } from '../../types';
import { useRegisterMutation } from './useRegisterMutation';
import { Button, Checkbox, Input, MailPlug, Spinner } from '../../components';
import {
	RegistrationForm,
	Nav,
	Link,
	NameContainer,
	RegistrationWrapper,
} from './styles';

export const Registration = () => {
	const { mutate, isLoading, isSuccess } = useRegisterMutation();
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors, isValid },
	} = useForm<RegisterDto>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<RegisterDto> = RegistrationData => {
		mutate(RegistrationData);
	};

	const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	if (isSuccess) {
		return <MailPlug title='A confirmation email has been sent to you' />;
	}

	return (
		<RegistrationWrapper>
			<Toaster />
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
				<Checkbox
					label='I accept the user agreement'
					isChecked={isChecked}
					handleChange={handleCheckbox}
					isDisabled={isSuccess}
				/>
				<Button
					title='SIGN UP'
					type='submit'
					disabled={!isValid || !isChecked || isLoading || isSuccess}
				/>
				<Nav>
					<Link to='/login'>Already have an account? Sign in</Link>
				</Nav>
			</RegistrationForm>
		</RegistrationWrapper>
	);
};
