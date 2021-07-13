import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Button} from '../elements/paginationElements';

import Pagination from '../components/Pagination';

Enzyme.configure({adapter: new Adapter()});

describe('<Pagination />', () => {
	let wrapper;
	let page;
	beforeEach(() => {
		page = 20;
		wrapper = Enzyme.mount(<Pagination page={page} />);
	});

	it('deberia renderizar un button con el numero de pagina que recibe por props', () => {
		expect(wrapper.contains(<Button>{page}</Button>)).toEqual(true);
	});
});
