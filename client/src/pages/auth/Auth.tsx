import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { authApi } from '../../api';
import { LoginDataType } from '../../interfaces/types';
import { Button, Checkbox, Input, Title } from '../../components';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';

export const Auth: FC = () => {
	const { register, handleSubmit, formState } = useForm<LoginDataType>();
	const onSubmit: SubmitHandler<LoginDataType> = async (dto: LoginDataType) => {
		try {
			const data = await authApi.login(dto);
			console.log(data);
		} catch (err) {
			console.warn('auto login error', err);
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
