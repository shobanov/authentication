import styled, { keyframes } from 'styled-components';

import spinner from '../../assets/svg/spinner.svg';

interface IProps {
	disabled?: boolean;
	isLoading?: boolean;
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonStyled = styled.button<IProps>`
	background-color: ${props => (props.disabled ? 'grey' : '#1890ff')};
	align-self: stretch;
	height: 44px;
	color: ${props => (props.isLoading ? 'transparent' : '#ffffff')};
	border: none;
	border-radius: 2px;
	position: relative;
	cursor: ${props => (props.isLoading ? 'progress' : 'pointer')};
	&::before {
		display: ${props => (props.isLoading ? 'inline' : 'none')};
		content: '';
		position: absolute;
		top: calc(50% - 13px);
		left: calc(50% - 13px);
		width: 26px;
		height: 26px;
		background-image: url(${spinner});
		background-repeat: no-repeat;
		animation: ${rotate360} 1.3s linear infinite;
	}
	&:hover {
		background-color: ${props => (props.disabled ? 'grey' : '#0077e6')};
	}
	&:active {
		background-color: ${props => (props.disabled ? 'grey' : '#004280')};
	}
`;
