import { forwardRef, PropsWithChildren } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
	children: React.ReactNode;
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props: PropsWithChildren, ref) => {
		return <ButtonStyled ref={ref} {...props} />;
	}
);
