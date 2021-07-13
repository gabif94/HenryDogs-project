import {
	GET_DOGS,
	GET_DOG_BY_ID,
	GET_DOG_BY_NAME,
	SORT,
	CREATE_DOG,
} from './../actions/dogActions';

import {GET_TEMPERAMENTS} from './../actions/temperamentActions';

const initialState = {
	dogs: [],
	dogDetail: {},
	temperament: [],
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case GET_DOGS:
			return {
				...state,
				dogs: action.payload,
			};
		case GET_DOG_BY_ID:
			return {
				...state,
				dogDetail: action.payload,
			};
		case GET_DOG_BY_NAME:
			console.log('ACTIONNNNN PAYLAOD !! ! ', action.payload);
			return {
				...state,
				dogs: [action.payload],
			};
		case GET_TEMPERAMENTS:
			return {
				...state,
				temperament: action.payload,
			};
		case SORT:
			return {
				...state,
				dogs: action.payload,
			};
		case CREATE_DOG:
			return {
				...state,
				dogs: [...state.dogs, action.payload],
			};

		default:
			return state;
	}
};

export default reducers;
