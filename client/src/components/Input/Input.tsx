import { FC } from 'react';

import { InputStiled } from './styles';

interface IProps {
  type: 'email' | 'text' | 'password';
  name: string;
  placeholder: string;
};

export const Input: FC<IProps> = ( props ) => {
  return (
    <InputStiled 
      { ...props }
    />
  );
};