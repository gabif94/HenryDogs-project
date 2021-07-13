import {getDogById} from '../store/actions/dogActions';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {Card, Title, Paragraph, Img} from '../elements/dogDetailsElements';

const DogDetails = props => {
	useEffect(() => {
		const id = props.match.params.id;
		props.getDogById(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Card>
			<Img
				src={
					props.dog.img
						? props.dog.img
						: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png`
				}
				alt=""
			/>
			<Title>{props.dog.name}</Title>
			<Paragraph>Temperaments: {props.dog.temperament}</Paragraph>
			<Paragraph>Height: {props.dog.height}</Paragraph>
			<Paragraph>Weight: {props.dog.weight}</Paragraph>
			<Paragraph>
				Life span:{' '}
				{props.dog.life_span ? props.dog.life_span : 'Dato no aportado'}
			</Paragraph>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		dog: state.dogDetail,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getDogById: id => dispatch(getDogById(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DogDetails);
