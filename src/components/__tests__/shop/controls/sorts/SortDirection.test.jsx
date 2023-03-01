import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import SortDirection from '../../../../shop/controls/sorts/SortDirection';

describe('SortDirection tests', () => {
	test('render SortDirection successfully', () => {
		const onChangeMock = vi.fn();

		render(
			<SortDirection
				isDescending={true}
				onChange={onChangeMock}
			/>
		);
		expect(
			screen.getByTestId('sortDirection-container')
		).toBeInTheDocument();
		expect(screen.getByRole('checkbox').labels[0]).toHaveTextContent(
			'Dsc ⇅'
		);
	});

	test('render SortDirection correctly', () => {
		const onChangeMock = vi.fn();

		render(
			<SortDirection
				isDescending={false}
				onChange={onChangeMock}
			/>
		);
		expect(
			screen.getByTestId('sortDirection-container')
		).toBeInTheDocument();
		expect(screen.getByRole('checkbox').labels[0]).toHaveTextContent(
			'Asc ⇅'
		);
	});

	test('should call function on click', async () => {
		const user = userEvent.setup();
		const onChangeMock = vi.fn();

		render(
			<SortDirection
				isDescending={true}
				onChange={onChangeMock}
			/>
		);
		await user.click(screen.getByRole('checkbox'));

		expect(onChangeMock).toHaveBeenCalledTimes(1);
	});
});
