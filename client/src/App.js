import {Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import DogDetails from './components/DogDetails';
import CreateDogForm from './components/CreateDogForm';

function App() {
	return (
		<>
			<Route path="/" component={Navbar} />
			<Route exact path="/" component={LandingPage} />
			<Route path="/home" component={Home} />
			<Route path="/details/:id" component={DogDetails} />
			<Route path="/createDog" component={CreateDogForm} />
		</>
	);
}

export default App;
