import { render, screen } from '@testing-library/react';
import React from 'react';

import Shop from '../../shop/Shop';

describe('Shop Component tests', () => {
	test('render Shop successfully', () => {
		render(<Shop />);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});
});
