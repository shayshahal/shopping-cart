import { queryByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Search from '../../navbar/Search';

vi.mock('../../shop/Shop.jsx', () => () => (
	<>
		<div data-testid='shop'>shop</div>
	</>
));

describe('Search component tests', () => {
	test('Renders search component', () => {
		render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		);

		expect(screen.getByTestId('search-container')).toBeInTheDocument();
	});
	test('renders a search input', () => {
		render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		);

		expect(screen.getByTestId('search-container')).toContainElement(
			screen.getByRole('searchbox')
		);
	});
	test('typing inside the search bar goes to shop', () => {
		render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		);
		userEvent.type(screen.getByRole('searchbox'), 'lol');

		expect(screen.getByTestId('shop')).toBeInTheDocument();
	});
});
