import { forwardRef } from 'react';
import { InputProps } from 'antd';

import { InputStiled } from './styles';

interface IProps extends InputProps {
  type: 'email' | 'text' | 'password' | 'submit';
  name: string;
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, IProps>(( props, ref ) => {
  
  return (
    <InputStiled {...props}/>
  );
});