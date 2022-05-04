import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { FC } from 'react';

import { CheckboxStyled } from './styles';
 
interface IProps {
  title: string;
};

function onChange(e: CheckboxChangeEvent) {
  console.log(`checked = ${e.target.checked}`);
};

export const Checkbox: FC<IProps> = ({ title }) => {
  
  return (
    <CheckboxStyled onChange={onChange}>
      { title }
    </CheckboxStyled>
  );
};