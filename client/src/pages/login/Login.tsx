import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from './validation';
import { LoginDto } from '../../types';
import { Button, Checkbox, Input, Spinner } from '../../components';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';
import { useLoginMutation } from './useLoginMutation';

export const Login = () => {
	const { mutate, isLoading } = useLoginMutation();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<LoginDto> = loginData => {
		mutate(loginData);
	};

	return (
		<AuthWrapper>
			{isLoading && <Spinner />}
			<h2>Sign in</h2>
			<AuthForm onSubmit={handleFormSubmit(handleSubmit)}>
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
				<Button title='SIGN IN' type='submit' disabled={isLoading} />
				<Nav>
					<LinkRouterDom to='/password_recovery'>
						Forgot password?
					</LinkRouterDom>
					<LinkRouterDom to='/registration'>
						Don't have an account? Sign Up
					</LinkRouterDom>
				</Nav>
			</AuthForm>
		</AuthWrapper>
	);
};
