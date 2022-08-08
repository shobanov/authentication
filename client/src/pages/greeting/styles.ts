import styled from 'styled-components';

export const GreetingWrapper = styled.div`
	width: 90%;
	& > div {
		position: absolute;
		margin: 0;
		top: 36%;
		left: 50%;
	}
	& button {
		position: absolute;
		top: 25px;
		right: 25px;
		width: 70px;
		font-weight: 600;
		font-size: 16px;
		letter-spacing: 1px;
		border-radius: 10px;
	}
	& h2 {
		text-align: center;
		font-weight: 600;
	}
`;
