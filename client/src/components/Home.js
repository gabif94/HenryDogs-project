import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
	getDogByName,
	getDogs,
	getTemperaments,
} from '../store/actions/dogActions';
import {Title, Paragraph, Img} from '../elements/dogDetailsElements';
import Pagination from './Pagination';
import {DogsGrid, SearchContainer} from '../elements/homeElements';
import SearchBar from './SearchBar';
import AlphabeticFilter from './AlphabeticFilter';
import TemperamentFilter from './TemperamentFilter';
import RaceFilter from './RaceFilter';

const Home = props => {
	console.log('PROPS DOGSSSSSSSSSSSSSSSSSSSSSSSSS', props.dogs);
	const [page, setPage] = useState(1);

	const LIMIT = 8;
	const nextPage = page * LIMIT;
	const prevPage = nextPage - LIMIT;
	const results = props.dogs.slice(prevPage, nextPage);

	useEffect(() => {
		getTemperamentsFunction();
		getDogsFunction();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getTemperamentsFunction() {
		props.getTemperaments();
	}

	function getDogsFunction() {
		props.getDogs();
	}

	console.log(props.dogs);
	return (
		<div>
			<SearchContainer>
				<SearchBar />
				<AlphabeticFilter />
				<TemperamentFilter />
				<RaceFilter />

				<Pagination page={page} setPage={setPage} />
			</SearchContainer>

			<div>
				<DogsGrid>
					{results &&
						results.map((el, idx) => (
							<div key={idx}>
								<Link to={`/details/${el.id}`}>
									<Img
										src={
											el.img
												? el.img
												: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png`
										}
										alt="dog"
									/>
								</Link>
								<Title>{el.name}</Title>
								<Paragraph>
									{Array.isArray(el.temperaments)
										? el.temperaments[0].nameTemperament
										: el.temperament}
								</Paragraph>
							</div>
						))}
				</DogsGrid>
			</div>
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
		getDogByName: dog => dispatch(getDogByName(dog)),
		getDogs: dogs => dispatch(getDogs(dogs)),
		getTemperaments: t => dispatch(getTemperaments(t)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
