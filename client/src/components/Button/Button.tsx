import { forwardRef, PropsWithChildren, ReactNode } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'reset' | 'submit';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: PropsWithChildren, ref) => <ButtonStyled ref={ref} {...props} />,
);
