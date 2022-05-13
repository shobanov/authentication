import styled from 'styled-components'

export const PasswordRecoveryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	& > span {
		margin-bottom: 20px;
		text-align: center;
	}
	@media (max-width: 480px) {
		width: 300px;
	}
`
export const PasswordRecoveryForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 90%;
	& > input {
		margin: 0;
	}
`
