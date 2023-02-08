import { render, screen } from '@testing-library/react';
import React from 'react';

import ProductList from '../../shop/productList.jsx';

const mockSortedAndFilteredList = [
	{
		name: 'blah',
		price: 3000,
		img: 'src',
	},
	{
		name: 'blah2',
		price: 2000,
		img: 'src',
	},
];

describe('ProductList component tests', () => {
	test('Render list successfully', () => {
		render(<ProductList />);

		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
