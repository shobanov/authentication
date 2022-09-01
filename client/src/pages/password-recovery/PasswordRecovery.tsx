import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer } from 'react-toastify';

import { Button, Input } from '../../components';
import { schema } from './validation';
import { usePasswordRecoveryMutation } from './usePasswordRecovery';
import { PasswordRecoveryForm, PasswordRecoveryWrapper } from './styles';
import { PasswordRecoveryDto } from '../../types';
import { MailNotify } from '../../notifications';

export function PasswordRecovery() {
  const { mutate, isLoading, isSuccess } = usePasswordRecoveryMutation();

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<PasswordRecoveryDto>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const handleSubmit: SubmitHandler<PasswordRecoveryDto> = (data) => {
    mutate(data);
  };

  if (isSuccess) {
    return (
      <MailNotify>
        To change your password, follow the link sent to your email
      </MailNotify>
    );
  }

  return (
    <PasswordRecoveryWrapper>
      <ToastContainer limit={1} />
      <h2>Enter your email address</h2>
      <PasswordRecoveryForm onSubmit={handleFormSubmit(handleSubmit)}>
        <Input
          type="email"
          placeholder="Email address"
          validationError={errors.email?.message}
          {...register('email')}
        />
        <Button
          type="submit"
          disabled={isLoading || isSuccess}
          isLoading={isLoading}
        >
          recover password
        </Button>
      </PasswordRecoveryForm>
    </PasswordRecoveryWrapper>
  );
}
