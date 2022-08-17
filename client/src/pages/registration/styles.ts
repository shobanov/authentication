import { Link as LinkRouterDom } from 'react-router-dom';

import styled from 'styled-components';

export const RegistrationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	& > div {
		position: absolute;
		top: 0;
	}
	& h2 {
		margin-bottom: 40px;
		font-size: larger;
		font-weight: 600;
	}
	@media (max-width: 480px) {
		width: 300px;
	}
`;

export const RegistrationForm = styled.form`
	display: flex;
	gap: 20px;
	flex-direction: column;
	align-items: center;
	width: 90%;
`;

export const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	& div {
		width: 48%;
		@media (max-width: 480px) {
			width: 100%;
		}
	}
	@media (max-width: 480px) {
		flex-wrap: wrap;
		gap: 20px;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
	height: 20px;
	width: 100%;
`;

export const Link = styled(LinkRouterDom)`
	text-decoration: underline;
`;
