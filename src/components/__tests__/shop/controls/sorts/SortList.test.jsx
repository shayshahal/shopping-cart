import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import SortList from '../../../../shop/controls/sorts/SortList';

const sortsFunctionsListMock = [
	{ price: vi.fn() },
	{ alphabet: vi.fn() },
	{ rating: vi.fn() },
];

describe('sortList component tests', () => {
	test('renders sortList successfully', () => {
		render(
			<SortList
				sortFunctions={sortsFunctionsListMock}
				checked={'price'}
				onSortChange={vi.fn}
				isDescending={true}
				onDirectionChange={vi.fn}
			/>
		);
		expect(screen.getByTestId('sort-list')).toBeInTheDocument();
	});
	test('renders sortList with correct amount of children successfully', () => {
		render(
			<SortList
				sortFunctions={sortsFunctionsListMock}
				checked={'price'}
				onSortChange={vi.fn}
				isDescending={true}
				onDirectionChange={vi.fn}
			/>
		);
		expect(screen.getByTestId('sort-list').childElementCount).toBe(4);
	});
});
