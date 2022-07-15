import { FC } from 'react';

import { ErrorStyled } from './styles';

interface IProps {
	text: string | undefined;
}

export const ValidationError: FC<IProps> = ({ text }) => {
	return <ErrorStyled>{text}</ErrorStyled>;
};
