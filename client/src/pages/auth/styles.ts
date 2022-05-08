import { Link } from 'react-router-dom';
import { Button, Form } from 'antd';
import styled from 'styled-components';

export const AuthForm = styled(Form)`
  width: 90%;
  @media (max-width: 480px) {
    width: 300px;
  };
`;

export const LinkForgotPassword = styled(Link)`
  float: right;
`;

export const LinkRegister = styled(Link)``;

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-bottom: 8px;
`;