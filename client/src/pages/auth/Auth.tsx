import { FC } from 'react';

import { Button, Checkbox, Input, Title } from '../../components';
import { AuthWrapper, LinkRouterDom, Nav } from './styles';

export const Auth: FC = () => {
  return (
    <AuthWrapper>
      <Title title="Sign in" />
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
      <Checkbox title="Remember me" />
      <Button title="SIGN IN" />
      <Nav>
        <LinkRouterDom to={"/change-password"}>
          Forgot password?
        </LinkRouterDom>
        <LinkRouterDom to={"/registration"}>
          Don't have an account? Sign Up
        </LinkRouterDom>
      </Nav>
    </AuthWrapper>
  );
};