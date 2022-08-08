import { forwardRef } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
	title: string;
	type: 'button' | 'reset' | 'submit';
	disabled?: boolean;
	handler?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ title, type, handler, disabled }, ref) => {
		return (
			<ButtonStyled ref={ref} type={type} onClick={handler} disabled={disabled}>
				{title}
			</ButtonStyled>
		);
	}
);
