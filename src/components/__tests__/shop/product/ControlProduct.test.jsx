import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ControlProduct from '../../../shop/product/ControlProduct';

describe('ControlHover component tests', () => {
	test('should render ControlProduct component', () => {
		render(
			<MemoryRouter>
				<ControlProduct
					onAdd={vi.fn()}
					product={{}}
				/>
			</MemoryRouter>
		);

		expect(
			screen.getByTestId('controlProduct-container')
		).toBeInTheDocument();
	});

	test('should call onAdd function on click', async () => {
		const onAddMock = vi.fn();
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<ControlProduct
					onAdd={onAddMock}
					product={{}}
				/>
			</MemoryRouter>
		);
		await user.click(screen.getByRole('button', { name: 'Add to Cart' }));

		expect(onAddMock).toHaveBeenCalled();
	});
});
