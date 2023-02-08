import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import Product from '../../shop/product/Product';

const addProductMock = vi.test();

describe('Product component tests', () => {
	test('should render Product component', () => {
		render(
			<Product
				addProduct={addProductMock}
				name='watch'
				price={3000}
			/>
		);
		expect(screen.getByRole('listitem')).toBeInTheDocument();
	});
	test('should render name as heading', () => {
        render(
			<Product
				addProduct={addProductMock}
				name='watch'
				price={3000}
			/>
		);

        expect(screen.getByRole('listitem')).toContainElement(screen.getByRole('heading'));
        expect(screen.getByRole('heading')).toHaveTextContent('watch');
    });
    test('should render price', () => {
        render(
            <Product 
                addProduct={addProductMock}
                name='watch'
                price={3000}
                />)

        expect(screen.getByRole('listitem')).toContainElement(screen.getByText('3000'));
    })
    test('should render image', () => {
        render(
            <Product 
                addProduct={addProductMock}
                name='watch'
                price={3000}
                />)

        expect(screen.getByRole('listitem')).toContainElement(screen.getByRole('img'));
    })
});
