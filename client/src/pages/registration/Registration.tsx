import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input, Title } from '../../components';
import { RegistrationForm, LinkRouterDom, Nav, NameContainer } from './styles';

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

export const Registration: FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log({...register("firstName")});

  return (
    <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <Title title="Sign up" />
      <NameContainer>
        <Input
          type="text"
          placeholder="First Name *"
          {...register("firstName")}
        />
        {errors.firstName && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="Last Name *"
          {...register("lastName")}
        />
        {errors.lastName && <span>This field is required</span>}
      </NameContainer>
      <Input
        type="email"
        placeholder="Email Address *"
        {...register("email")}
      />
      {errors.email && <span>This field is required</span>}
      <Input
        type="password"
        placeholder="Password *"
        {...register("password")}
      />
      {errors.password && <span>This field is required</span>}
      <Checkbox
        label="I want to receive inspiration, marketing promotions and updates via email."
      />
      <Button title="SIGN UP" type="submit" />
      <Nav>
        <LinkRouterDom to="/auth">
          Already have an account? Sign in
        </LinkRouterDom>
      </Nav>
    </RegistrationForm>
  );
};