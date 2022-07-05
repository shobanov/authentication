import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import nookies from 'nookies';

import { registerApi } from '../../api';
import { RegisterDataType } from '../../types/types';
import { Button, Checkbox, Input, Title } from '../../components';
import {
	RegistrationForm,
	LinkRouterDom,
	Nav,
	NameContainer,
	RegistrationWrapper,
} from './styles';

export const Registration: FC = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const { register, handleSubmit, formState } = useForm<RegisterDataType>();
	const onSubmit: SubmitHandler<RegisterDataType> = async (
		dto: RegisterDataType
	) => {
		try {
			const data = await registerApi.register(dto);
			console.log(data);
			nookies.set(null, 'token', data.token, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			});
			setErrorMessage(null);
		} catch (err) {
			console.warn('Registration error', err);
			if (err.response) {
				setErrorMessage(err.data.response.message);
			}
		}
	};

	return (
		<RegistrationWrapper>
			<Title title='Sign up' />
			<RegistrationForm onSubmit={handleSubmit(onSubmit)}>
				<NameContainer>
					<Input
						type='text'
						placeholder='First Name *'
						{...register('firstName')}
					/>
					<Input
						type='text'
						placeholder='Last Name *'
						{...register('lastName')}
					/>
				</NameContainer>
				<Input
					type='email'
					placeholder='Email Address *'
					{...register('email')}
				/>
				<Input
					type='password'
					placeholder='Password *'
					{...register('password')}
				/>
				<Checkbox label='I want to receive inspiration, marketing promotions and updates via email.' />
				<Button
					isDisabled={!formState.isValid || formState.isSubmitting}
					title='SIGN UP'
					type='submit'
				/>
				{errorMessage && 'Need to insert a worning!'}
				<Nav>
					<LinkRouterDom to='/auth'>
						Already have an account? Sign in
					</LinkRouterDom>
				</Nav>
			</RegistrationForm>
		</RegistrationWrapper>
	);
};
