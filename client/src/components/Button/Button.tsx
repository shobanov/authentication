import { forwardRef } from 'react';
 
import { ButtonStyled } from './styles';

interface IProps {
  title: string;
  type: "button" | "reset" | "submit";
};

export const Button = forwardRef<HTMLButtonElement, IProps>(({ title, type }, ref) => {
  
  return (
    <ButtonStyled ref={ref} {...type}>
      { title }
    </ButtonStyled>
  );
});