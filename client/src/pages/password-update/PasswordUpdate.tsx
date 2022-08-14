import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster } from 'react-hot-toast';

import { Button, Input, Spinner } from '../../components';
import { usePassUpdateMutation } from './usePassUpdate';
import { schema } from './validation';
import { IPasswordUpdate } from '../../types';
import { PasswordUpdateForm, PasswordUpdateWrapper } from './styles';

export const PasswordUpdate = () => {
	const { mutate, isLoading, isSuccess } = usePassUpdateMutation();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<IPasswordUpdate>({
		resolver: yupResolver(schema),
	});

	const handleSubmit: SubmitHandler<IPasswordUpdate> = ({ password }) => {
		const link = window.location.pathname.split('/').pop();
		mutate({ password, link });
	};

	return (
		<PasswordUpdateWrapper>
			<Toaster />
			{isLoading && <Spinner />}
			<h2>Сreate a new password</h2>
			<PasswordUpdateForm onSubmit={handleFormSubmit(handleSubmit)}>
				<Input
					type='password'
					placeholder='New password'
					validationError={errors.password?.message}
					{...register('password')}
				/>
				<Input
					type='password'
					placeholder='Confirm password'
					validationError={errors.passwordConfirm?.message}
					{...register('passwordConfirm')}
				/>
				<Button
					title='change password'
					type='submit'
					disabled={isLoading || isSuccess}
				/>
			</PasswordUpdateForm>
		</PasswordUpdateWrapper>
	);
};
