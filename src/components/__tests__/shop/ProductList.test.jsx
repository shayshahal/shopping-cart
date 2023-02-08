import { render, screen } from '@testing-library/react';
import React from 'react';

import ProductList from '../../shop/ProductList';

const mockSortedAndFilteredProducts = [
	{
        id: 1,
        title: 'Product 1',
        price: 100,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        title: 'Product 2',
        price: 200,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        title: 'Product 3',
        price: 300,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        title: 'Product 4',
        price: 400,
        image: 'https://via.placeholder.com/150',
    }
]

describe('ProductList Component tests', () => {
	test('render ProductList successfully', () => {
		render(<ProductList />);

		expect(screen.getByRole(list)).toBeInTheDocument();
	});
	
});
