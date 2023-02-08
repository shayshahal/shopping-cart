import { render, screen } from '@testing-library/react';
import React from 'react';

import ProductList from '../../shop/ProductList';

const mockSortedAndFilteredProducts = [
	{
        title: 'Product 1',
        price: 100
    },
    {
        title: 'Product 2',
        price: 200
    },
    {
        title: 'Product 3',
        price: 300
    },
    {
        title: 'Product 4',
        price: 400
    }
]

describe('ProductList Component tests', () => {
	test('render ProductList successfully', () => {
		render(<ProductList sortedAndFilteredList={mockSortedAndFilteredProducts} />);

		expect(screen.getByRole('list')).toBeInTheDocument();
	});
	
	test('render ProductList with products successfully', () => {
		render(<ProductList sortedAndFilteredList={mockSortedAndFilteredProducts} />);

		expect(screen.getByRole('listitem')).toBeInTheDocument();
		expect(screen.getAllByRole('listitem').toHaveLength(4));
		expect(screen.getAllByRole('listitem')[2]).toContainElement(screen.getByText('300'));
	})
});
