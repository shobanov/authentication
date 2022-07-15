import { forwardRef } from 'react';

import { ButtonStyled } from './styles';

interface IProps {
	title: string;
	type: 'button' | 'reset' | 'submit';
	disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ title, type, disabled }, ref) => {
		return (
			<ButtonStyled ref={ref} type={type}>
				{title}
			</ButtonStyled>
		);
	}
);
