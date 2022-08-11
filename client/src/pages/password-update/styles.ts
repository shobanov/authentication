import styled from 'styled-components';

export const PasswordUpdateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	& h2 {
		margin-bottom: 20px;
		text-align: center;
		font-size: large;
		font-weight: 400;
	}
	& > div {
		position: absolute;
		top: 60px;
	}
	@media (max-width: 480px) {
		width: 300px;
	}
`;
export const PasswordUpdateForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 90%;
	& > div {
		margin-bottom: 15px;
	}
	& :nth-child(3) {
		margin-bottom: 30px;
	}
`;
