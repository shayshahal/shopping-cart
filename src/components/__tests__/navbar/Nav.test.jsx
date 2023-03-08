import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Nav from '../../navbar/Nav';

describe('Nav tests', () => {
	test('Render nav successfully', () => {
		render(
			<MemoryRouter>
				<Nav
					cartItems={{}}
					setCartItems={vi.fn()}
				/>
			</MemoryRouter>
		);

		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});
	test('Render nav correctly', () => {
		render(
			<MemoryRouter>
				<Nav
					cartItems={{}}
					setCartItems={vi.fn()}
				/>
			</MemoryRouter>
		);

		expect(screen.getByRole('navigation').childElementCount).toBe(5);
	});
});
