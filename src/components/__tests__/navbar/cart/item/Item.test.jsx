import React from 'react';
import { render, screen} from '@testing-library/react';

import Item from '../../../../navbar/cart/item/Item';

const name = 'blah', price = 2000;
const item = <Item name={name} price={price}/>

describe('Item component tests', ()=>{
    test('Item renders successfully', ()=>{
        render(item)

        expect(screen.getByTestId('item')).toBeInTheDocument();
    })
    test('Item renders a title successfully', ()=>{
        render(item)

        expect(item).toContainElement(screen.getByRole('heading'));
        expect(screen.getByRole('heading').textContent).toBe(price)
    })
    test('Price renders successfully', ()=>{
        render(item)

        expect(item).toContainElement(screen.getByText(price));
    })
    test('Item renders an image successfully', ()=>{
        render(item)

        expect(item).toContainElement(screen.getByRole('img'));
    })

    test('Item renders a control component', ()=>{
        render(item)

        expect(item).toContainElement(screen.getByTestId('control'));
    })

})