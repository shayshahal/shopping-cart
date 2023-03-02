import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import Filter from '../../../../shop/controls/filters/Filter';

describe('FilterList component tests', () => {
	test('renders Filter successfully', () => {
		render(
			<Filter
				name={'rating'}
				onChange={vi.fn()}
				min={0}
				max={5}
			/>
		);
		expect(screen.getByTestId('filter-container')).toBeInTheDocument();
	});
	test('renders Filter correctly', () => {
		render(
			<Filter
				name={'rating'}
				onChange={vi.fn()}
				min={0}
				max={5}
			/>
		);
		expect(screen.getByTestId('filter-container')).toHaveTextContent(
			'rating'
		);
		expect(screen.getAllByRole('spinbutton')).toHaveLength(2);
		expect(screen.getAllByRole('spinbutton')[0]).toHaveValue(0);
		expect(screen.getAllByRole('spinbutton')[1]).toHaveValue(5);
		expect(screen.getByTestId('filter-container').childElementCount).toBe(
			3
		);
	});
	test('renders Filter successfully', async () => {
		const onChangeMock = vi.fn();
		const user = userEvent.setup();

		render(
			<Filter
				name={'rating'}
				onChange={onChangeMock}
				min={0}
				max={5}
			/>
		);
		await user.type(screen.getAllByRole('spinbutton')[0], '4');

		expect(onChangeMock).toHaveBeenCalledTimes(1);
	});
});
