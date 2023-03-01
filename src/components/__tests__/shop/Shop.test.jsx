import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Shop from '../../shop/Shop';

const productListMock = [
	{
		title: 'Product 1',
		description: 'Product 1 description',
		price: 100,
		stock: 100,
		categoryId: 1,
		id: 1,
		images: [
			'https://via.placeholder.com/150',
			'https://via.placeholder.com/150',
		],
		thumbnail: 'https://via.placeholder.com/150',
		discountPercentage: 50,
		rating: 4.69,
	},

	{
		title: 'Product 2',
		description: 'Product 2 description',
		price: 200,
		stock: 100,
		categoryId: 2,
		id: 2,
		images: [
			'https://via.placeholder.com/150',
			'https://via.placeholder.com/150',
		],
		thumbnail: 'https://via.placeholder.com/150',
		discountPercentage: 50,
		rating: 4.72,
	},
	{
		title: 'Product 3',
		description: 'Product 3 description',
		price: 300,
		stock: 100,
		categoryId: 3,
		id: 3,
		images: [
			'https://via.placeholder.com/150',
			'https://via.placeholder.com/150',
		],
		thumbnail: 'https://via.placeholder.com/150',
		discountPercentage: 40,
		rating: 4.55,
	},
];
const addProductMock = vi.fn();

describe('Shop Component tests', () => {
	test('render Shop successfully', () => {
		render(
			<MemoryRouter>
				<Shop
					productList={productListMock}
					addProduct={addProductMock}
				/>
			</MemoryRouter>
		);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});
});
