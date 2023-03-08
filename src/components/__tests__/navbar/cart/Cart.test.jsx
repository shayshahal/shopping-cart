import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Cart from '../../../navbar/cart/Cart';

const cartItemsMock = {
	1: [
		{
			title: 'Title 1',
			price: 100,
			thumbnail: 'https://via.placeholder.com/150x150',
		},
		1,
	],
	2: [
		{
			title: 'Title 2',
			price: 200,
			thumbnail: 'https://via.placeholder.com/150x150',
		},
		1,
	],
	3: [
		{
			title: 'Title 3',
			price: 300,
			thumbnail: 'https://via.placeholder.com/150x150',
		},
		1,
	],
};

describe('Cart tests', () => {
	test('renders Cart successfully', () => {
		render(
			<MemoryRouter>
				<Cart
					onClose={vi.fn()}
					cartItems={cartItemsMock}
					setCartItems={vi.fn()}
				/>
			</MemoryRouter>
		);

		expect(screen.getByTestId('cart-container')).toBeInTheDocument();
	});

	test('calls close function on button click', async () => {
		const onCloseMock = vi.fn();
		const user = userEvent.setup();
		
		render(
			<MemoryRouter>
				<Cart
					onClose={onCloseMock}
					cartItems={cartItemsMock}
					setCartItems={vi.fn()}
				/>
			</MemoryRouter>
		);
		await user.click(screen.getByRole('button', { name: '☰' }));
		expect(screen.queryByTestId('cart-container')).toBeNull();
	});
});
