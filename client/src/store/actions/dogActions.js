import {DOG_URL} from '../../constants';

export const GET_DOGS = 'GET_DOGS';
export const GET_DOG_BY_ID = 'GET_DOG_BY_ID';
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME';
export const UPWARD = 'UPWARD';
export const FALLING = 'FALLING';
export const SORT = 'SORT';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const CREATE_DOG = 'CREATE_DOG';

export function getDogs() {
	return function (dispatch) {
		return fetch(DOG_URL)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: GET_DOGS,
					payload: json,
				});
			});
	};
}

export function getDogById(dogId) {
	return function (dispatch) {
		return fetch(DOG_URL + `/${dogId}`)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: GET_DOG_BY_ID,
					payload: json,
				});
			});
	};
}

export function getDogByName(dogName) {
	return function (dispatch) {
		return fetch(`http://localhost:3001/api/dogs?name=${dogName}`)
			.then(response => response.json())
			.then(json => {
				console.log('RESPUESTA DE JSONN!!!!!!!!!!!!!!!!!!!!!!!', json);
				dispatch({type: GET_DOG_BY_NAME, payload: json});
			})
			.catch(err => alert(err));
	};
}

export function sortDogs(order, dogs) {
	let dogSorted = [...dogs];

	dogSorted.sort(function (a, b) {
		var nameA = a.name.toUpperCase();
		var nameB = b.name.toUpperCase();

		if (order === UPWARD) {
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		}
		if (order === FALLING) {
			if (nameA < nameB) {
				return 1;
			}
			if (nameA > nameB) {
				return -1;
			}
			return 0;
		} else {
			return null;
		}
	});
	return function (dispatch) {
		dispatch({type: SORT, payload: dogSorted});
	};
}

export function getTemperaments() {
	return function (dispatch) {
		return fetch(`http://localhost:3001/api/temperaments`)
			.then(response => response.json())
			.then(json => {
				dispatch({type: GET_TEMPERAMENTS, payload: json});
			});
	};
}

export function filterByTemperament(dogs, temperament) {
	let temperamentFilter = [...dogs];
	temperamentFilter = temperamentFilter.filter(t => {
		if (t.temperament) {
			const dogTemperament = t.temperament.split(', ');
			return dogTemperament.includes(temperament);
		} else {
			return false;
		}
	});
	return function (dispatch) {
		dispatch({type: SORT, payload: temperamentFilter});
	};
}

export function createDog(dogs) {
	return {type: CREATE_DOG, payload: dogs};
}
