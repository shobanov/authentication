import { FC } from 'react';
import { Button, Checkbox, Input, Title } from '../components';

import { AuthorizationWrapper } from './styles';

export const Authorization: FC = () => {
  return (
    <AuthorizationWrapper>
      <Title title="Sign in" />
      <Input
        type={'email'}
        name={'email'}
        placeholder={'Email Address *'}
      />
      <Input
        type={'email'}
        name={'email'}
        placeholder={'Password *'}
      />
      <Checkbox title="Remember me" />
      <Button title="SIGN IN" />
    </AuthorizationWrapper>
  );
};