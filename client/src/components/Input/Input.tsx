import { forwardRef } from 'react';

import { ValidationError } from '../ValidationError';
import { InputStiled, InputWrapper } from './styles';

interface IProps {
	type: 'email' | 'text' | 'password' | 'submit';
	name: string;
	placeholder: string;
	validationError?: string;
}

export const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => {
	return (
		<InputWrapper>
			<InputStiled {...props} ref={ref}></InputStiled>
			{props.validationError && (
				<ValidationError text={props.validationError}></ValidationError>
			)}
		</InputWrapper>
	);
});
