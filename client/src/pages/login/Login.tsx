import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

import { schema } from './validation';
import { LoginDto } from '../../types';
import { Button, Checkbox, Input, Spinner } from '../../components';
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles';

export const Login = () => {
	// const navigate = useNavigate();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<LoginDto> = data => {
		// navigate('/greeting');
	};

	return (
		<AuthWrapper>
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
