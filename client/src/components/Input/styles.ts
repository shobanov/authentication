import styled from 'styled-components';
import { Input } from 'antd';

export const InputStiled = styled(Input)`
  height: 40px;
  align-self: stretch;
  margin-bottom: 20px;
  & ~ input {
    margin-bottom: 20px;
  };
`;