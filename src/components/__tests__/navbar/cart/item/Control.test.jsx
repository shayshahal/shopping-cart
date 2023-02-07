import React from 'react';
import { render, screen, act} from '@testing-library/react';

import Control from '../../../../navbar/cart/item/Control';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

const onclick = vi.fn();
const control = <Control amount={1} onClick={onclick}/>

describe('Control component tests', ()=>{
    test('renders Control successfully', ()=>{
        render(control)

        expect(screen.getByTestId('control-container')).toBeInTheDocument();
    })

    test('Renders buttons successfully', ()=>{
        render(control)

        expect(control).toContainElement(screen.getByRole('button', {name: '+'}));
        expect(control).toContainElement(screen.getByRole('button', {name: '-'}));
    })

    test('Renders number input successfully', ()=>{
        render(control)

        expect(control).toContainElement(screen.getByRole('spinbutton'));
        expect(screen.getByRole('spinbutton')).toHaveValue(1);
    })

    test('Pressing the amount buttons increment/decrement the input value', ()=>{
        render(control)
        const plusBtn = screen.getByRole('button', {name: '+'});
        const minusBtn = screen.getByRole('button', {name: '-'});
        const amountInput = screen.getByRole('spinbutton');

        act(()=>{
            userEvent.click(plusBtn);
        })

        expect(onclick).toHaveBeenNthCalledWith(1, '+')
        expect(amountInput).toHaveValue(2);
        act(()=>{
            userEvent.click(minusBtn);
        })

        expect(onclick).toHaveBeenNthCalledWith(2, '-')
        expect(amountInput).toHaveValue(1);
    })
})