import React from 'react';
import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

import CartToggle from '../../../navbar/cart/Cart';
import Cart from '../../../navbar/cart/Cart';

describe('CartToggle tests', ()=>{
    test('Cart renders successfully', ()=>{
        render(<CartToggle/>)

        expect(screen.getByTestId('cart-toggle')).toBeInTheDocument();
    })

    test('Opens Cart successfully ', ()=>{
        render(<CartToggle/>);

        userEvent.click(screen.getByTestId('cart-toggle'));

        expect(<Cart/>).toBeInTheDocument();
    })
})

describe('Cart tests', ()=>{
    test('renders Cart successfully', ()=>{
        render(<Cart/>)

        expect(screen.getByTestId('cart')).toBeInTheDocument();
    })
    
    describe('items-container tests', ()=>{
        test('renders item container successfully', ()=>{
            const cart = <Cart/>
            render(cart)

            expect(cart).toContainElement(screen.getByTestId('item-container'));
        })
        test.todo('renders Items successfully')
    });

    test('renders complete button successfully', ()=>{
        const cart = <Cart/>
        render(cart)

        expect(cart).toContainElement(screen.getByText('Complete purchase'));
    })

    describe('Cart closing tests', ()=>{
        test('Renders closing invisible button successfully', ()=>{
            render(<Cart/>)

            const closingBtn = screen.getByTestId('cart-closing-button');

            expect(closingBtn).toBeInTheDocument();
            expect(closingBtn).not.toBeVisible()
        })

        test('Closes cart on click away', ()=>{
            const cart = <Cart/>
            render(cart)

            userEvent.click(screen.getByTestId('cart-closing-button'))

            expect(cart).not.toBeInTheDocument();
        })
    })
})