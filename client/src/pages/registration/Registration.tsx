import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from './validation';
import { RegisterDto } from '../../types';
import * as AuthAC from '../../store/action-creators/AuthAC';
import { Button, Checkbox, Input, Title } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	RegistrationForm,
	LinkRouterDom,
	Nav,
	NameContainer,
	RegistrationWrapper,
} from './styles';

export const Registration = () => {
	const dispatch = useAppDispatch();
	const { isLoading, isAuth, error } = useAppSelector(
		state => state.registration
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterDto>({
		resolver: yupResolver(schema),
	});
	const onSubmit: SubmitHandler<RegisterDto> = data => {
		dispatch(AuthAC.registration(data));
	};

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
