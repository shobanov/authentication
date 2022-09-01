import { ErrorStyled } from './styles';

interface ValidationErrorProps {
  errorMessage?: string;
}

export function ValidationError({ errorMessage }: ValidationErrorProps) {
  return <ErrorStyled>{errorMessage}</ErrorStyled>;
}
