import { FC } from 'react';

import { TitleStyled } from './styles';

interface IProps {
  title: string;
};

export const Title: FC<IProps> = ({ title }) => {
  
  return (
    <TitleStyled>
      { title }
    </TitleStyled>
  );
};