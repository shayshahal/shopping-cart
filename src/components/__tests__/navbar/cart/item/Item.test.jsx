import { render, screen } from '@testing-library/react';
import React from 'react';

import { vi } from 'vitest';
import Item from '../../../../navbar/cart/item/Item';

const itemMock = {
	title: 'title',
	price: 1000,
	thumbnail: 'https://via.placeholder.com/150x150',
};

describe('Item component tests', () => {
	test('Item renders successfully', () => {
		render(
			<Item
				item={itemMock}
				amount={1}
				onDelete={vi.fn()}
				onChange={vi.fn()}
				onIncrement={vi.fn()}
				onDecrement={vi.fn()}
			/>
		);

		expect(screen.getByTestId('item-container')).toBeInTheDocument();
	});
});
