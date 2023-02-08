import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import Search from '../../navbar/Search';

describe('Search component tests', () => {
	test('Renders search component', () => {
		render(<Search />);

		expect(screen.getByTestId('search-container')).toBeInTheDocument();
	});
	test('renders a search input', () => {
		render(<Search />);

		expect(screen.getByTestId('search-container')).toContainElement(
			screen.getByRole('searchbox')
		);
	});
	test('typing inside the search bar goes to shop', () => {
		const onChangeMock = vi.fn();
		render(<Search onChange={onChangeMock} />);
		userEvent.type(screen.getByRole('searchbox'), 'lol');

		expect(onChangeMock).toHaveBeenCalledTimes(1);
		expect(window.location.pathname).toBe('/Shop');
	});
});
