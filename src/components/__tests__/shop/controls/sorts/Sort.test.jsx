import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import Sort from '../../../../shop/controls/sorts/Sort';

describe('Sort Component tests', () => {
	test('Sort component renders successfully', () => {
		render(
			<Sort
				name={'price'}
				isChecked={false}
				onClick={vi.fn()}
			/>
		);

		expect(screen.getByTestId('sort-container')).toBeInTheDocument();
		expect(screen.getByTestId('sort-container')).toHaveTextContent('price');
		expect(screen.getByRole('radio')).not.toBeChecked();
	});

	test('Sort component checked renders successfully', () => {
		render(
			<Sort
				name={'price'}
				isChecked={true}
				onClick={vi.fn()}
			/>
		);

		expect(screen.getByRole('radio')).toBeChecked();
	});

	test('Call onChange on click', async () => {
		const user = userEvent.setup();
		const onChangeMock = vi.fn();

		render(
			<Sort
				name={'price'}
				isChecked={false}
				onClick={onChangeMock}
			/>
		);
		await user.click(screen.getByRole('radio'));

		expect(onChangeMock).toHaveBeenNthCalledWith(1, 'price');
	});
});
