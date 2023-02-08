import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import Category from '../../../controls/categories/Category';

const onClickMock = vi.fn();

describe('Category Component tests', () => {
	test('Category component renders successfully', () => {
		render(
			<Category
				onClick={onClickMock}
				name='category2'
			/>
		);
		expect(screen.getByRole('listitem')).toBeInTheDocument();
	});
	describe('radio tests', () => {
		test('Category component renders radio successfully', () => {
			render(
				<Category
					onClick={onClickMock}
					name='category2'
				/>
			);
			expect(screen.getByRole('listitem')).toContainElement(
				screen.getByRole('radio')
			);
			expect(screen.getByRole('radio').labels[0]).toHaveTextContent(
				'category2'
			);
		});
		test('Highlights after pressing radio', () => {
			render(
				<Category
					onClick={onClickMock}
					name='category2'
				/>
			);
			userEvent.click(screen.getByRole('radio'));
			expect(onClickMock).toHaveBeenCalledWith('category2', false);
			expect(screen.getByRole('category2').labels[0]).toHaveStyle({
				color: 'blue',
			});
		});
	});

	describe('checkbox tests', () => {
		test('Category component renders checkbox inside radio successfully', () => {
			render(
				<Category
					onClick={onClickMock}
					name='category2'
				/>
			);
			expect(screen.getByRole('listitem')).toContainElement(
				screen.getByRole('checkbox')
			);
		});
		test('Changes after pressing checkbox', () => {
			render(
				<Category
					onClick={onClickMock}
					name='category2'
				/>
			);

			userEvent.click(screen.getByRole('checkbox'));
			expect(onClickMock).toHaveBeenCalledWith('category2', true);
			expect(screen.getByRole('checkbox').labels[0]).toHaveTextContent(
				'-'
			);
		});
	});
});
