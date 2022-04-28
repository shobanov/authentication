import { FC } from 'react';
import { Input, Title } from '../components';

import { AuthorizationWrapper } from './styles';

export const Authorization: FC = () => {
  return (
    <AuthorizationWrapper>
      <Title title="Sign up" />
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
    </AuthorizationWrapper>
  );
};