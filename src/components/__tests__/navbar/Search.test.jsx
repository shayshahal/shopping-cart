import React from 'react';
import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Search from '../../navbar/Search';
import userEvent from "@testing-library/user-event";
import { vi } from 'vitest';

describe('Search component tests', ()=>{
    test('Renders search component', ()=>{
        render(<Search/>)

        expect(screen.getByTestId('search-container')).toBeInTheDocument();
    })
    test('renders a search input', ()=>{
        render(<Search/>)

        expect(screen.getByTestId('search-container')).toContainElement(screen.getByRole('searchbox'))
    })
    test('typing inside the search bar goes to shop', ()=>{
        const onChangeMock = vi.fn();
        render(<Search onChange={onChangeMock}/>)
        userEvent.type(screen.getByRole('searchbox'),'lol');

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(window.location.pathname).toBe('/Shop')
    })
})