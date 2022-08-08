import styled from 'styled-components';

interface IProps {
	disabled?: boolean;
}

export const ButtonStyled = styled.button<IProps>`
	background-color: ${props => (props.disabled ? 'grey' : '#1890ff')};
	align-self: stretch;
	height: 44px;
	color: #ffffff;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	&:hover {
		background-color: #0077e6;
	}
	&:active {
		background-color: #004280;
	}
`;
