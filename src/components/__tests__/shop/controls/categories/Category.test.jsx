import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import Category from '../../../../shop/controls/categories/Category';

describe('Category Component tests', () => {
	test('Category component renders successfully', () => {
		render(
			<Category
				name={'shoes'}
				onClick={vi.fn()}
				isChecked={false}
			/>
		);
		expect(screen.getByRole('listitem')).toBeInTheDocument();
		expect(screen.getByRole('listitem')).toHaveTextContent('shoes');
		expect(screen.getByRole('checkbox')).not.toBeChecked();
	});
	test('Category component renders correctly', () => {
		render(
			<Category
				name={'shoes'}
				onClick={vi.fn()}
				isChecked={true}
			/>
		);
		expect(screen.getByRole('checkbox')).toBeChecked();
	});
	test('calls function on click', async () => {
		const onClickMock = vi.fn();
		const user = userEvent.setup();

		render(
			<Category
				name={'shoes'}
				onClick={onClickMock}
				isChecked={false}
			/>
		);
		await user.click(screen.getByRole('checkbox'));

		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
