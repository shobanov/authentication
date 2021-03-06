import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from './validation';
import { LoginDto } from '../../types';
import * as AuthAC from '../../store/action-creators/AuthAC';
import { Button, Checkbox, Input, Title } from '../../components';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const Login = () => {
	const dispatch = useAppDispatch();
	const { isLoading, isAuth, error } = useAppSelector(state => state.login);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		resolver: yupResolver(schema),
	});
	const onSubmit: SubmitHandler<LoginDto> = data => {
		dispatch(AuthAC.login(data));
	};

	return (
		<AuthWrapper>
			<Title title='Sign in' />
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
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
				<Checkbox label='Remember me' />
				<Button title='SIGN IN' type='submit' />
				<Nav>
					<LinkRouterDom to='/forgot_password'>Forgot password?</LinkRouterDom>
					<LinkRouterDom to='/registration'>
						Don't have an account? Sign Up
					</LinkRouterDom>
				</Nav>
			</AuthForm>
		</AuthWrapper>
	);
};
