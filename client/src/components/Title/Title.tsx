import { TitleStyled } from './styles';

interface TitleProps {
	title: string;
}

export const Title = ({ title }: TitleProps) => {
	return <TitleStyled>{title}</TitleStyled>;
};
