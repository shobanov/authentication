import styled from 'styled-components';

export const MailNotifyStyled = styled.div`
	height: 50%;
	text-align: center;
	& img {
		width: 60%;
	}
	& h2 {
		font-weight: 400;
		margin: 20px;
		@media (max-width: 390px) {
			font-size: 22px;
		}
	}
`;
