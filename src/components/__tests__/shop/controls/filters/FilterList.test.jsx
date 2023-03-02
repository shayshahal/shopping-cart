import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import FilterList from '../../../../shop/controls/filters/FilterList';

describe('FilterList component tests', () => {
	test('renders CategoryList successfully', () => {
		render(
			<FilterList
				onFilterChange={vi.fn()}
				filters={{
					price: { min: 0, max: 100000 },
					rating: { min: 0, max: 5 },
				}}
			/>
		);
		expect(screen.getByTestId('filterList-container')).toBeInTheDocument();
	});
	test('renders correct amount of filters', () => {
		render(
			<FilterList
				onFilterChange={vi.fn()}
				filters={{
					price: { min: 0, max: 100000 },
					rating: { min: 0, max: 5 },
				}}
			/>
		);
		expect(
			screen.getByTestId('filterList-container').childElementCount
		).toBe(2);
	});
});
