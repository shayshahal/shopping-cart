import { render, screen } from '@testing-library/react';
import React from 'react';

import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Control from '../../../../navbar/cart/item/Control';

describe('Control component tests', () => {
	test('renders Control successfully', () => {
		render(
			<Control
				amount={1}
				onChange={vi.fn()}
				onIncrement={vi.fn()}
				onDecrement={vi.fn()}
				onDelete={vi.fn()}
			/>
		);

		expect(screen.getByTestId('control-container')).toBeInTheDocument();
	});

	test('renders Control input correctly', () => {
		render(
			<Control
				amount={1}
				onChange={vi.fn()}
				onIncrement={vi.fn()}
				onDecrement={vi.fn()}
				onDelete={vi.fn()}
			/>
		);

		expect(screen.getByRole('spinbutton')).toHaveValue(1);
	});

	test('calls onChange on type and change value', async () => {
		const onChangeMock = vi.fn();
		const user = userEvent.setup();

		render(
			<Control
				amount={1}
				onChange={onChangeMock}
				onIncrement={vi.fn()}
				onDecrement={vi.fn()}
				onDelete={vi.fn()}
			/>
		);
		await user.type(screen.getByRole('spinbutton'), '3');

		expect(onChangeMock).toHaveBeenCalled();
		expect(screen.getByRole('spinbutton')).toHaveValue(3);
	});

	test('calls onIncrement on click and change value', async () => {
		const onIncrementMock = vi.fn();
		const user = userEvent.setup();

		render(
			<Control
				amount={1}
				onChange={vi.fn()}
				onIncrement={onIncrementMock}
				onDecrement={vi.fn()}
				onDelete={vi.fn()}
			/>
		);
		await user.click(screen.getByRole('button', { name: '+' }));

		expect(onIncrementMock).toHaveBeenCalled();
		expect(screen.getByRole('spinbutton')).toHaveValue(2);
	});

	test('calls onDecrement on click and change value', async () => {
		const onDecrementMock = vi.fn();
		const user = userEvent.setup();

		render(
			<Control
				amount={2}
				onChange={vi.fn()}
				onIncrement={vi.fn()}
				onDecrement={onDecrementMock}
				onDelete={vi.fn()}
			/>
		);
		await user.click(screen.getByRole('button', { name: '-' }));

		expect(onDecrementMock).toHaveBeenCalled();
		expect(screen.getByRole('spinbutton')).toHaveValue(1);
	});

	test('calls onDelete on click and change value', async () => {
		const onDeleteMock = vi.fn();
		const user = userEvent.setup();

		render(
			<Control
				amount={1}
				onChange={vi.fn()}
				onIncrement={vi.fn()}
				onDecrement={vi.fn()}
				onDelete={onDeleteMock}
			/>
		);
		await user.click(screen.getByRole('button', { name: 'Delete' }));

		expect(onDeleteMock).toHaveBeenCalled();
	});
});
