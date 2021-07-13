import {connect} from 'react-redux';
import {UPWARD, FALLING, sortDogs} from '../store/actions/dogActions';
import {Select} from '../elements/createDogsFormElements';

const AlphabeticFilter = props => {
	function handleDispatchOrder(e) {
		if (e.target.value === UPWARD || e.target.value === FALLING) {
			props.sortDogs(e.target.value, props.dogs);
		}
	}
	return (
		<div>
			<Select onChange={handleDispatchOrder}>
				<option>Order by Name</option>
				<option value={UPWARD} key="">
					A - Z
				</option>
				<option value={FALLING} key="">
					Z - A
				</option>
			</Select>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		dogs: state.dogs,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sortDogs: (dog1, dog2) => dispatch(sortDogs(dog1, dog2)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AlphabeticFilter);
