import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AuthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	@media (max-width: 480px) {
		width: 300px;
	}
	& > :nth-child(2) {
		margin-bottom: 20px;
	}
`

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	height: 20px;
	width: 100%;
`

export const LinkRouterDom = styled(Link)`
	text-decoration: underline;
`
