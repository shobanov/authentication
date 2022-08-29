import { forwardRef } from 'react';

import { ValidationError } from '../ValidationError';
import { InputStyled, InputWrapper } from './styles';

interface InputProps {
	type: 'email' | 'text' | 'password' | 'submit';
	name: string;
	placeholder: string;
	validationError?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<InputWrapper>
			<InputStyled {...props} ref={ref} />
			{props.validationError && (
				<ValidationError errorMessage={props.validationError} />
			)}
		</InputWrapper>
	);
});
