import { ChangeEvent } from 'react';

import { CheckboxStyled, Label, Title } from './styles';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  isDisabled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { label, ...rest } = props;

  return (
    <Label>
      <CheckboxStyled {...rest} />
      <Title>{label}</Title>
    </Label>
  );
}
