import { forwardRef } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
	title: string;
	type: 'button' | 'reset' | 'submit';
	disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ title, type }, ref) => {
		return (
			<>
				<ButtonStyled ref={ref} type={type}>
					{title}
				</ButtonStyled>
			</>
		);
	}
);
