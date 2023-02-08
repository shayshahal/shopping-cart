import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import CategoryList from '../../../controls/categories/categoryList';

const categoryList = ['category1', 'category2', 'category3', 'category4'];

describe('CategoryList component tests', () => {
	test('renders CategoryList successfully', () => {
		render(
			<categoryList
				onClick={vi.fn()}
				categoryList={categoryList}
			/>
		);
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
	test('renders categoryList items successfully', () => {
		render(
			<categoryList
				onClick={vi.fn()}
				categoryList={categoryList}
			/>
		);
		expect(screen.getByRole('list')).toContainElement(
			screen.getByRole('listitem')
		);
		expect(screen.getAllByRole('listitem').length).toBe(5);
		expect(screen.getByRole('list')).toMatchSnapshot();
	});
});
