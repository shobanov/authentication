import styled from 'styled-components';

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  & h2 {
    margin-bottom: 40px;
    font-size: larger;
    font-weight: 600;
  }
  & a {
    text-align: right;
    width: inherit;
    @media (max-width: 480px) {
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const RegistrationForm = styled.form`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  & div {
    &:nth-child(1) {
      margin-right: 7px;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;
