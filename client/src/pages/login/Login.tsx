import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { schema } from './validation';
import { LoginDto } from '../../types';
import { AuthApi } from '../../api/AuthApi';
import { Button, Checkbox, Input, Spinner } from '../../components';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';

export const Login = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isLoading, mutateAsync } = useMutation(
		'login',
		(loginData: LoginDto) => AuthApi.login(loginData),
		{
			onSuccess({ data }) {
				console.log(data);

				localStorage.setItem('token', data.data.accessToken);
				queryClient.setQueryData('login', data.data.user);
				navigate('/greeting');
			},
		}
	);

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<LoginDto> = loginData => {
		mutateAsync(loginData);
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
					<LinkRouterDom to='/forgot_password'>Forgot password?</LinkRouterDom>
					<LinkRouterDom to='/registration'>
						Don't have an account? Sign Up
					</LinkRouterDom>
				</Nav>
			</AuthForm>
		</AuthWrapper>
	);
};
