import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';
describe('Home tests', () => {
	test('Home should render ', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	test.todo('button should navigate to shop', async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		await user.click(screen.getByRole('button'));
	});
});
