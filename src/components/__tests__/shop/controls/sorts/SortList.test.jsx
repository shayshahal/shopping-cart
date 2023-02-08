import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import SortList from '../../../controls/sorts/sortList';

const sortsFunctionsListMock = [
	{ name: price, fn: vi.fn() },
	{ name: alphabet, fn: vi.fn() },
	{ name: type, fn: vi.fn() },
];

describe('sortList component tests', () => {
	test('renders sortList successfully', () => {
		render(<SortList sortsFunctionsList={sortsFunctionsListMock} />);
		expect(screen.getByTestId('sort-list')).toBeInTheDocument();
	});
	test('renders sortList list successfully', () => {
		render(<SortList sortsFunctionsList={sortsFunctionsListMock} />);
		expect(screen.getByTestId('sort-list')).toContainElement(
			screen.getByRole('list')
		);
	});
    describe('test sort list-items' , () => {
        test('renders sortList list-items successfully', () => {
            render(<SortList sortsFunctionsList={sortsFunctionsListMock} />);
            expect(screen.getByRole('list')).toContainElement(
                screen.getByRole('listitem')
            );
            expect(screen.getAllByRole('listitem')).toHaveLength(3);
            expect(screen.getAllByRole('listitem')[2].labels[0]).toHaveTextContent('type');
        });
        test('calls function correctly on render', () => {
            render(<SortList sortsFunctionsList={sortsFunctionsListMock} />);
            expect(sortsFunctionsListMock[0].fn).toHaveBeenCalledWith(true);
        })
    })
});
