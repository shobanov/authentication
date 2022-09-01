import { Link as LinkRouterDom } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(LinkRouterDom)`
  text-decoration: none;
  color: #0b57d0;
  &:hover {
    text-decoration: underline;
  }
`;
