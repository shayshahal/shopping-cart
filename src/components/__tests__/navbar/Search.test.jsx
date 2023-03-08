import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Search from '../../navbar/Search';

describe('Search component tests', () => {
	test('Renders search component', () => {
		render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		);

		expect(screen.getByTestId('search-container')).toBeInTheDocument();
	});

	test.todo('typing inside the search bar goes to shop');
});
