import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input, Title } from '../../components';
import { schema } from './validation';
// import * as AuthAC from '../../store/action-creators/AuthAC';
import { RegisterDto } from '../../types';
import {
	RegistrationForm,
	LinkRouterDom,
	Nav,
	NameContainer,
	RegistrationWrapper,
} from './styles';

export const Registration: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterDto>({
		resolver: yupResolver(schema),
	});
	const onSubmit: SubmitHandler<RegisterDto> = data => console.log(data);

	// AuthAC.registration(data)

	return (
		<RegistrationWrapper>
			<Title title='Sign up' />
			<RegistrationForm onSubmit={handleSubmit(onSubmit)}>
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
				<Button title='SIGN UP' type='submit' />
				<Nav>
					<LinkRouterDom to='/auth'>
						Already have an account? Sign in
					</LinkRouterDom>
				</Nav>
			</RegistrationForm>
		</RegistrationWrapper>
	);
};
