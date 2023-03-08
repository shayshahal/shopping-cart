import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import Shop from '../../shop/Shop';

describe('Shop Component tests', () => {
	test('render Shop successfully', () => {
		render(
			<MemoryRouter>
				<Shop
					productList={[]}
					addProduct={vi.fn()}
				/>
			</MemoryRouter>
		);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});
});
