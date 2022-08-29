import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { Button, Input } from '../../components';
import { usePassUpdateMutation } from './usePassUpdate';
import { schema } from './validation';
import { IPasswordUpdate } from '../../types';
import { PasswordUpdateForm, PasswordUpdateWrapper } from './styles';

export const PasswordUpdate = () => {
	const { mutate, isLoading, isSuccess } = usePassUpdateMutation();
	const { link } = useParams();

	const {
		register,
		handleSubmit: handleFormSubmit,
		formState: { errors },
	} = useForm<IPasswordUpdate>({
		resolver: yupResolver(schema),
		mode: 'onTouched',
	});

	const handleSubmit: SubmitHandler<IPasswordUpdate> = ({ password }) => {
		mutate({ password, link });
	};

	return (
		<PasswordUpdateWrapper>
			<ToastContainer limit={1} />
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
					type='submit'
					disabled={isLoading || isSuccess}
					isLoading={isLoading}
				>
					change password
				</Button>
			</PasswordUpdateForm>
		</PasswordUpdateWrapper>
	);
};
