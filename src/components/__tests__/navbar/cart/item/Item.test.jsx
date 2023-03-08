import React from 'react';
import { render, screen} from '@testing-library/react';

import Item from '../../../../navbar/cart/item/Item';
import { vi } from 'vitest';

const itemMock = {
    title: 'title',
    price: 1000,
    thumbnail: 'https://via.placeholder.com/150x150',
};
const item = <Item item={v[0]}
amount={1}
onDelete={vi.fn()}
onChange={vi.fn()}
onIncrement={vi.fn()}
onDecrement={vi.fn()}/>

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