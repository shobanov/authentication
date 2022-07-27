import styled from 'styled-components';

interface IProps {
	disabled?: boolean;
}

export const ButtonStyled = styled.button<IProps>`
	background-color: ${props => (props.disabled ? 'grey' : '#1890ff')};
	align-self: stretch;
	margin-top: 25px;
	height: 44px;
	color: #ffffff;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	&:active {
		box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
			rgba(0, 0, 0, 0.1) 0 1px 4px -1px;

		&:hover {
			content: '""';
			opacity: 1;
			color: black;
			background-color: black;
		}
	}
`;
