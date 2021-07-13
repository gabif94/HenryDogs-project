import styled from 'styled-components';

const LandingContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(top, #fff, white);
	background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
	text-align: center;
`;

const Button = styled.button`
	width: 150px;
	height: 50px;
	font-size: 15px;
	position: absolute;
	bottom: 4em;
	right: 4em;
	background-color: #000;
	border-radius: 1.5em;
	color: white;
	text-transform: uppercase;
	padding: 1em 1.5em;
	cursor: pointer;
`;

const Title = styled.h2`
	font-family: 'Roboto', cursive;
	font-size: x-large;
	position: absolute;
	right: 40em;
	bottom: 30em;
`;

const Img = styled.img`
	width: 100vw;
	height: 100vh;
`;

export {Img, Title, Button, LandingContainer};
