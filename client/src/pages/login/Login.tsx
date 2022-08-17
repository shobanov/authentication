import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';

import { schema } from './validation';
import { LoginDto } from '../../types';
import { Button, Input, Spinner } from '../../components';
import { AuthForm, AuthWrapper, Link, Nav } from './styles';
import { useLoginMutation } from './useLoginMutation';

export const Login = () => {
	const { mutate, isLoading, isSuccess } = useLoginMutation();

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
			<Toaster />
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
				<Button
					title='SIGN IN'
					type='submit'
					disabled={isLoading || isSuccess}
				/>
				<Nav>
					<Link to='/password_recovery'>Forgot password?</Link>
					<Link to='/registration'>Don't have an account? Sign Up</Link>
				</Nav>
			</AuthForm>
		</AuthWrapper>
	);
};
