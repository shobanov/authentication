import { FC } from 'react';

import { CheckboxStyled, Label, Title } from './styles';
 
interface IProps {
  label: string;
};

export const Checkbox: FC<IProps> = ({ label }) => {
  
  return (
    <Label >
      <CheckboxStyled/>
      <Title>{ label }</Title>
    </Label>
  );
};

// function onChange(e: CheckboxChangeEvent) {
//   console.log(`checked = ${e.target.checked}`);
// };