import {connect} from 'react-redux';
import {useState} from 'react';
import {getDogByName} from '../store/actions/dogActions';
import {Select} from '../elements/createDogsFormElements';

const RaceFilter = props => {
	const [input, setInput] = useState({
		dog: '',
	});

	function handleDispatchDog(e) {
		props.getDogByName(e.target.value);
	}
	return (
		<div>
			<Select
				name="dogSelect"
				value={input.dogSelect}
				onChange={handleDispatchDog}
			>
				<option value="" key="">
					Filter by Races
				</option>
				{props.dogs &&
					props.dogs.map(el => <option key={el.id}>{el.name}</option>)}
			</Select>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		dogs: state.dogs,
		// temperaments: state.temperament,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getDogByName: dog => dispatch(getDogByName(dog)),
		// getDogs: dogs => dispatch(getDogs(dogs)),
		// getTemperaments: t => dispatch(getTemperaments(t)),
		// sortDogs: (dog1, dog2) => dispatch(sortDogs(dog1, dog2)),
		// filterByTemperament: (t1, t2) => dispatch(filterByTemperament(t1, t2)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceFilter);
