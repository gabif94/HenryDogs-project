import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTemperaments, createDog} from '../store/actions/dogActions';
import {
	FormContainer,
	Form,
	Label,
	Input,
	Select,
	TextError,
	ContainerButton,
	Button,
	ErrorMessage,
	SuccessMessage,
} from '../elements/createDogsFormElements';

const CreateDogForm = props => {
	const [dog, setDog] = useState({
		name: '',
		height: '',
		weight: '',
		yearsoflife: '',
		nameTemperament: '',
	});

	async function handleSubmit(e) {
		e.preventDefault();
		console.log('ENVIANDO DOGGGGGGGGGGGGGGG', dog);

		await fetch('http://localhost:3001/api/dogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dog),
		});
		alert('SUCCESSFULLY CREATED DOG');
		window.location.href = 'http://localhost:3000/home';
		console.log('DOGGGGG', dog);
		props.createDog();
	}
	function handleChange(e) {
		setDog({
			...dog,
			[e.target.name]: e.target.value,
		});
	}
	function getTemperamentsFunction() {
		props.getTemperaments();
	}

	useEffect(() => {
		getTemperamentsFunction();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<FormContainer>
			<Form onSubmit={handleSubmit}>
				<div>
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						placeholder="Name"
						name="name"
						required="required"
						id="name"
						value={dog.name}
						onChange={handleChange}
					/>
					<TextError></TextError>
				</div>

				<div>
					<Label>Height</Label>
					<Input
						type="number"
						placeholder="Height"
						name="height"
						required="required"
						value={dog.height}
						onChange={handleChange}
					/>
					<TextError></TextError>
				</div>

				<div>
					<Label>Weight</Label>
					<Input
						type="number"
						placeholder="Weight"
						name="weight"
						required="required"
						value={dog.weight}
						onChange={handleChange}
					/>
					<TextError></TextError>
				</div>

				<div>
					<Label>Span of Life</Label>
					<Input
						type="number"
						placeholder="Span of life"
						name="yearsoflife"
						required="required"
						value={dog.yearsoflife}
						onChange={handleChange}
					/>
					<TextError></TextError>
				</div>
				<div>
					<Label>Temperament</Label>
					<Select
						name="nameTemperament"
						value={dog.nameTemperament}
						onChange={handleChange}
						required
					>
						<option>Select Temperament</option>
						{props.temperament &&
							props.temperament.map((el, idx) => (
								<option value={el.id} key={el.id}>
									{el.nameTemperament}
								</option>
							))}
					</Select>
					<TextError>lorem ipsum dolor sit amet, consectet</TextError>
				</div>
				{false && (
					<ErrorMessage>
						<p>
							<b>Error:</b> please complete all fields
						</p>
					</ErrorMessage>
				)}
				<ContainerButton>
					<Button type="submit">Create </Button>
					<SuccessMessage>Successfully created dog</SuccessMessage>
				</ContainerButton>
			</Form>
		</FormContainer>
	);
};

function mapStateToProps(state) {
	return {
		temperament: state.temperament,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getTemperaments: t => dispatch(getTemperaments(t)),
		createDog: dog => dispatch(createDog(dog)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDogForm);
