import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Checkbox, Input, Title } from '../../components';
import { LoginDto } from '../../types';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';

export const Login: FC = () => {
	const { register, formState } = useForm<LoginDto>();

	return (
		<AuthWrapper>
			<Title title='Sign in' />
			<AuthForm>
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
				<Checkbox label='Remember me' />
				<Button
					disabled={!formState.isValid || formState.isSubmitting}
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
