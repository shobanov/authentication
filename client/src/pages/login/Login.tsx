import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

import { schema } from './validation';
import { LoginDto } from '../../types';
import { Button, Input, Link } from '../../components';
import { AuthForm, AuthWrapper, Nav } from './styles';
import { useLoginMutation } from './useLoginMutation';

export const Login = () => {
	const { mutate, isLoading, isSuccess } = useLoginMutation();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		resolver: yupResolver(schema),
		mode: 'onTouched',
	});

	const handleSubmit: SubmitHandler<LoginDto> = loginData => {
		mutate(loginData);
	};

	return (
		<AuthWrapper>
			<ToastContainer limit={1} />
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
				<Button
					type='submit'
					disabled={isLoading || isSuccess}
					isLoading={isLoading}
				>
					SIGN IN
				</Button>
				<Nav>
					<Link to='/password_recovery'>Forgot password?</Link>
					<Link to='/registration'>Don't have an account? Sign Up</Link>
				</Nav>
			</AuthForm>
		</AuthWrapper>
	);
};
