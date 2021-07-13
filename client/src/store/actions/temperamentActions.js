export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const SORT = 'SORT';

export function getTemperaments() {
	return function (dispatch) {
		return fetch(`http://localhost:3001/api/temperaments`)
			.then(response => response.json())
			.then(json => {
				dispatch({type: GET_TEMPERAMENTS, payload: json});
			});
	};
}

export function filterByTemperament(dogs, temperaments) {
	const temperamentFilter = [...dogs];
	temperamentFilter.filter(t => {
		if (t.temperament) {
			const dogTemperament = t.temperament.split(', ');
			return dogTemperament.includes(temperaments);
		} else {
			return false;
		}
	});
	return function (dispatch) {
		dispatch({type: SORT, payload: temperamentFilter});
	};
}
