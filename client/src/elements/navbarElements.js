import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

const Nav = styled.nav`
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: space-space-between;
	align-items: center;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;
	background: #000;
`;

const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		color: #15cdfc;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
`;

const Logo = styled.img`
	width: 100px;
`;

export {Nav, NavLink, NavMenu, Logo};
