import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import Categories from '../../../controls/categories/Categories';

const categories = ['category1', 'category2', 'category3', 'category4'];

describe('Categories component tests', () => {
	test('renders Categories successfully', () => {
		render(
			<Categories
				onClick={vi.fn()}
				categoryList={categories}
			/>
		);
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
	test('renders Categories items successfully', () => {
		render(
			<Categories
				onClick={vi.fn()}
				categoryList={categories}
			/>
		);
		expect(screen.getByRole('list')).toContainElement(
			screen.getByRole('listitem')
		);
		expect(screen.getAllByRole('listitem').length).toBe(5);
		expect(screen.getByRole('list')).toMatchSnapshot();
	});
});
