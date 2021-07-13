import styled from 'styled-components';

const Card = styled.div`
	box-shadow: 1px 2px 10px rgba(7, 7, 7, 0.2);
	cursor: pointer;
	padding-top: 150px;
	transition: transform 0.1s;
	max-width: 800px;
	margin: auto;
`;

const Title = styled.p`
	color: grey;
	font-size: 18px;
	text-align: center;
`;

const Img = styled.img`
	width: 100%;
	height: 350px;
`;

const Paragraph = styled.p`
	padding: 10px;
	text-align: center;
	font-size: 15px;
	text-transform: capitalize;
`;

export {Card, Title, Img, Paragraph};
