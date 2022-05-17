import { FC, useState } from 'react';
import nookies from 'nookies';
import { SubmitHandler, useForm } from 'react-hook-form';

import { loginApi } from '../../api';
import { LoginDataType } from '../../interfaces/types';
import { Button, Checkbox, Input, Title } from '../../components';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';

export const Login: FC = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const { register, handleSubmit, formState } = useForm<LoginDataType>();
	const onSubmit: SubmitHandler<LoginDataType> = async (dto: LoginDataType) => {
		try {
			const data = await loginApi.login(dto);
			nookies.set(null, 'token', data.token, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			});
		} catch (err) {
			console.warn('Login error', err);
			if (err.response) {
				setErrorMessage(err.data.response.message);
			}
		}
	};

	return (
		<AuthWrapper>
			<Title title='Sign in' />
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
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
				<Checkbox label='Remember me' {...register('rememberMe')} />
				<Button
					isDisabled={!formState.isValid || formState.isSubmitting}
					title='SIGN IN'
					type='submit'
				/>
				{errorMessage && 'Need to insert a worning!'}
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
