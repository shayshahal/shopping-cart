import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import SortDirection from '../../../controls/sorts/SortDirection';

const onChangeMock = vi.fn();

describe('SortDirection tests', () => {
    test('render SortDirection successfully', () => {
        render(<SortDirection onChange={onChangeMock} />);
        expect(screen.getByTestId('sortDirection-container')).toBeInTheDocument();
        expect(screen.getByTestId('sortDirection-container').labels[0]).toHaveTextContent('Desc');
    });

    test('should change sort direction', () => {
        render(<SortDirection onChange={onChangeMock} />);
        userEvent.click(onChangeMock);
        expect(onChangeMock).toHaveBeenCalled();
        expect(screen.getByTestId('sortDirection-container').labels[0]).toHaveTextContent('Asc');
    });    
})