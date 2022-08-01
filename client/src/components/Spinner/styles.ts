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
	color: #1890ff;
	font-size: 10px;
	margin: 80px auto;
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
