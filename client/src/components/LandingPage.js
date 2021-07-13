import {Link} from 'react-router-dom';
import photo from '../images/cachorro-husky.jpg';
import {
	LandingContainer,
	Img,
	Title,
	Button,
} from '../elements/landingPageElements';

const LandingPage = () => {
	return (
		<LandingContainer className="container">
			<Img src={photo} alt="portada" />
			<Title className="init_title">Henry Dogs</Title>
			<Link to="/home">
				<Button className="button" type="submit">
					HOME
				</Button>
			</Link>
		</LandingContainer>
	);
};

export default LandingPage;
