import { FC, forwardRef } from 'react';
import { ButtonProps } from 'antd';
 
import { ButtonStyled } from './styles';

interface IProps extends ButtonProps {
  title: string;
};

export const Button = forwardRef<HTMLButtonElement, IProps>(({ title, ...props }, ref) => {
  
  return (
    <ButtonStyled ref={ref} type="primary" htmlType="submit" {...props}>
      { title }
    </ButtonStyled>
  );
});