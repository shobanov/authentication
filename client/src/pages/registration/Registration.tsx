import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

import { schema } from './validation';
import { IRegistration } from '../../types';
import { useRegistrationMutation } from './useRegistrationMutation';
import { Button, Checkbox, Input, Link } from '../../components';
import { RegistrationForm, NameContainer, RegistrationWrapper } from './styles';
import { MailNotify } from '../../notifications';

export function Registration() {
  const { mutate, isLoading, isSuccess } = useRegistrationMutation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<IRegistration>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const handleSubmit: SubmitHandler<IRegistration> = ({
    email,
    firstName,
    lastName,
    password,
  }) => {
    mutate({
      email,
      firstName,
      lastName,
      password,
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  if (isSuccess) {
    return (
      <MailNotify>
        To change your password, follow the link sent to your email
      </MailNotify>
    );
  }

  return (
    <RegistrationWrapper>
      <ToastContainer limit={1} />
      <h2>Sign up</h2>
      <RegistrationForm onSubmit={handleFormSubmit(handleSubmit)}>
        <NameContainer>
          <Input
            type="text"
            placeholder="First Name *"
            validationError={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            type="text"
            placeholder="Last Name *"
            validationError={errors.lastName?.message}
            {...register('lastName')}
          />
        </NameContainer>
        <Input
          type="text"
          placeholder="Email Address *"
          validationError={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Password *"
          validationError={errors.password?.message}
          {...register('password')}
        />
        <Input
          type="password"
          placeholder="Confirm password *"
          validationError={errors.passwordConfirm?.message}
          {...register('passwordConfirm')}
        />
        <Checkbox
          label="I accept the user agreement"
          isChecked={isChecked}
          onChange={handleCheckbox}
          isDisabled={isSuccess}
          data-test-id="registration_agreement"
        />
        <Button
          type="submit"
          disabled={!isChecked || isLoading || isSuccess}
          isLoading={isLoading}
          data-test-id="registration_btn"
        >
          SIGN UP
        </Button>
        <Link to="/login">Already have an account? Sign in</Link>
      </RegistrationForm>
    </RegistrationWrapper>
  );
}
