import styled from 'styled-components';

export const PasswordRecoveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  & h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: large;
    font-weight: 400;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const PasswordRecoveryForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 15px;
`;
