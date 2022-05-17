import { forwardRef } from 'react';

import { ButtonStyled } from './styles';

interface IProps {
	title: string;
	type: 'button' | 'reset' | 'submit';
	isDisabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ title, type, isDisabled }, ref) => {
		return (
			<ButtonStyled ref={ref} {...type} disabled={isDisabled}>
				{title}
			</ButtonStyled>
		);
	}
);
