import styled from 'styled-components';

const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;

const Button = styled.button`
	background: #000;
	color: #fff;
	height: 35px;
	border-radius: 2px;
	padding: 0 10px;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const PageContainer = styled.div`
	background: #000;
	color: #fff;
	height: 35px;
	border-radius: 2px;
	padding: 0 10px;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

Button.displayName = 'button';

export {ButtonsContainer, Button, PageContainer};
