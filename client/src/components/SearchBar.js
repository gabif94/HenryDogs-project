import {useState} from 'react';
import {Input, ContainerButton} from '../elements/createDogsFormElements';
import {Button} from '../elements/homeElements';
import {connect} from 'react-redux';
import {getDogByName} from '../store/actions/dogActions';

const SearchBar = props => {
	const [input, setInput] = useState({
		dog: '',
	});

	function handleDispatch(e) {
		e.preventDefault();

		if (input.dog) {
			console.log(input.dog);
			props.getDogByName(input.dog);
		} else {
			alert('You must enter a name');
		}
	}

	function handleInput(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}
	return (
		<>
			<form onSubmit={handleDispatch}>
				<div>
					<Input
						type="text"
						placeholder="Dog name"
						name="dog"
						value={input.dog}
						onChange={handleInput}
					/>
				</div>
				<ContainerButton>
					<Button type="submit">Search</Button>
				</ContainerButton>
			</form>
		</>
	);
};

function mapStateToProps() {
	return;
}

function mapDispatchToProps(dispatch) {
	return {
		getDogByName: dog => dispatch(getDogByName(dog)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
