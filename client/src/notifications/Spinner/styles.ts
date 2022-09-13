import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const SpinnerStyled = styled.div`
  color: #c5221f;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: 0s;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  animation-fill-mode: both;
  animation: ${spin} 2s infinite ease-in-out;
  &:before {
    color: #4285f4;
    content: '';
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    animation-fill-mode: both;
    animation: ${spin} 2s infinite ease-in-out;
    animation-delay: -0.5s;
    left: -3em;
  }
  &:after {
    color: #34a853;
    content: '';
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    animation-fill-mode: both;
    animation: ${spin} 2s infinite ease-in-out;
    animation-delay: 0.5s;
    left: 3em;
  }
`;
