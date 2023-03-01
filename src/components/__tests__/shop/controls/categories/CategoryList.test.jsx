import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import CategoryList from '../../../../shop/controls/categories/CategoryList';

describe('CategoryList component tests', () => {
	test('renders CategoryList successfully', () => {
		render(<CategoryList onCategoryClick={vi.fn()} />);
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
	test('calls function successfully on reset click', async () => {
		const onClickMock = vi.fn();
		const user = userEvent.setup();

		render(<CategoryList onCategoryClick={onClickMock} />);
		const resetButton = screen.getByRole('button', { name: 'reset' });
		await user.click(resetButton);

		expect(onClickMock).toHaveBeenNthCalledWith(1, new Set());
	});
});
