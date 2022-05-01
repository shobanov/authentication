import { FC } from 'react';
 
import { ButtonStyled } from './styles';

interface IProps {
  title: string;
};

export const Button: FC<IProps> = ({ title }) => {
  return (
    <ButtonStyled type='primary'>
      { title }
    </ButtonStyled>
  );
};