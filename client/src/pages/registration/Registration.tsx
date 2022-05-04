import { FC } from 'react';

import { Button, Checkbox, Input, Title } from '../../components';
import { RegistrationWrapper, LinkRouterDom, Nav, NameContainer } from './styles';

export const Registration: FC = () => {
  return (
    <RegistrationWrapper>
      <Title title="Sign up" />
      <NameContainer>
        <Input
          type={'text'}
          name={'firstName'}
          placeholder={'First Name *'}
        />
        <Input
          type={'text'}
          name={'lastName'}
          placeholder={'Last Name *'}
        />
      </NameContainer>
      <Input
        type={'email'}
        name={'email'}
        placeholder={'Email Address *'}
      />
      <Input
        type={'password'}
        name={'password'}
        placeholder={'Password *'}
      />
      <Checkbox
        title="I want to receive inspiration, marketing promotions and updates via email."
      />
      <Button title="SIGN UP" />
      <Nav>
        <LinkRouterDom to={"/auth"}>
          Already have an account? Sign in
        </LinkRouterDom>
      </Nav>
    </RegistrationWrapper>
  );
};