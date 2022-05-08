import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  @media (max-width: 480px) {
    width: 300px;
  };
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  & > :nth-child(n+1):nth-child(-n+2) {
    width: 48%;
  };
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  height: 20px;
  width: 100%;
`;

export const LinkRouterDom  = styled(Link)`
  text-decoration: underline;
`;