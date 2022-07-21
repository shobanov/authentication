import { ErrorStyled } from './styles';

interface ValidationErrorProps {
	text?: string;
}

export const ValidationError = ({ text }: ValidationErrorProps) => (
	<ErrorStyled>{text}</ErrorStyled>
);
