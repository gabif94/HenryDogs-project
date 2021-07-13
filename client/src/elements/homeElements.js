import styled from 'styled-components';

const SearchContainer = styled.div`
	width: 1200px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 30px;
	margin: 10px;
`;

const Button = styled.button`
	height: 45px;
	line-height: 45px;
	width: 100%;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.1s ease all;
	margin-top: 10px;

	&:hover {
		box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
	}
`;

const DogsGrid = styled.div`
	width: 85vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
`;

export {SearchContainer, DogsGrid, Button};
