import styled from 'styled-components';

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  @media (max-width: 480px) {
    width: 300px;
  }
  & h2 {
    margin-bottom: 20px;
    font-size: larger;
    font-weight: 600;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 20px;
  width: 100%;
  @media (max-width: 480px) {
    gap: 5px;
  }
  & a {
    font-size: 15px;
  }
`;
