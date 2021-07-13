import {connect} from 'react-redux';
import {useState} from 'react';
import {filterByTemperament} from '../store/actions/dogActions';
import {Select} from '../elements/createDogsFormElements';

const TemperamentFilter = props => {
	const [input, setInput] = useState({
		dog: '',
	});
	function handleDispatchTemperament(e) {
		props.filterByTemperament(props.dogs, e.target.value);
	}
	return (
		<div>
			<Select
				name="nameTemperament"
				value={input.nameTemperament}
				onChange={handleDispatchTemperament}
			>
				<option value="">Filter by Temperament</option>
				{props.temperaments &&
					props.temperaments.map((el, idx) => (
						<option value={el.nameTemperament} key={idx}>
							{el.nameTemperament}
						</option>
					))}
			</Select>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		dogs: state.dogs,
		temperaments: state.temperament,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		filterByTemperament: (t1, t2) => dispatch(filterByTemperament(t1, t2)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TemperamentFilter);
