import { PropsWithChildren } from 'react';
import { LinkStyled } from './styles';

interface LinkProps {
	to: string;
}

export const Link = (props: PropsWithChildren<LinkProps>) => (
	<LinkStyled {...props} />
);
