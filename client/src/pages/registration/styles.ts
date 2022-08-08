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
	flex-direction: column;
	align-items: center;
	width: 90%;
	& :nth-child(2) {
		margin-bottom: 20px;
	}
	& :nth-child(3) {
		margin-bottom: 20px;
	}
	& :nth-child(4) {
		margin-bottom: 20px;
	}
`;

export const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 40px;
	width: 100%;
	margin-bottom: 24px;
	& div {
		width: 46%;
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
