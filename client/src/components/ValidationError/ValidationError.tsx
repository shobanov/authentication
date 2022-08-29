import { ErrorStyled } from './styles';

interface ValidationErrorProps {
	errorMessage?: string;
}

export const ValidationError = ({ errorMessage }: ValidationErrorProps) => (
	<ErrorStyled>{errorMessage}</ErrorStyled>
);
