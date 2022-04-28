import { FC } from 'react';

import { TitleStiled } from './styles';

interface IProps {
  title: string;
};

export const Title: FC<IProps> = ({ title }) => {
  return (
    <TitleStiled>
      { title }
    </TitleStiled>
  );
};