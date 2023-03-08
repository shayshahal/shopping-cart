import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import CartToggle from '../../../navbar/cart/CartToggle';

describe('CartToggle tests', () => {
	test('render CartToggle successfully', () => {
		render(
			<MemoryRouter>
				<CartToggle
					cartItems={{}}
					setCartItems={null}
				/>
			</MemoryRouter>
		);

		expect(screen.getByTestId('cartToggle-container')).toBeInTheDocument();
	});
	test('toggles on on click', async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<CartToggle
					cartItems={{}}
					setCartItems={vi.fn()}
				/>
			</MemoryRouter>
		);
		await user.click(screen.getByTestId('cartToggle-button'));

		expect(
			screen.getByTestId('cartToggle-container').childElementCount
		).toBe(2);
	});

	test('toggles off on two click', async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<CartToggle
					cartItems={{}}
					setCartItems={vi.fn()}
				/>
			</MemoryRouter>
		);
		await user.click(screen.getByTestId('cartToggle-button'));
		await user.click(screen.getByTestId('cartToggle-button'));

		expect(
			screen.getByTestId('cartToggle-container').childElementCount
		).toBe(1);
	});
});
