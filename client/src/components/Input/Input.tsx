import { forwardRef } from 'react';

import { InputStiled } from './styles';

interface IProps {
  type: 'email' | 'text' | 'password' | 'submit';
  name: string;
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, IProps>(( props, ref ) => {
  
  return (
    <InputStiled {...props} ref={ref}/>
  );
});