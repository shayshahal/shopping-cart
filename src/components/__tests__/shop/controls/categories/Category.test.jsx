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
			expect(screen.getByRole('listitem')).toContainElement(
				screen.getByLabelText('category2')
			);
		});
		test('Highlights after pressing radio', () => {
			render(
				<Category
					onClick={onClickMock}
					name='category2'
				/>
			);
			userEvent.click(screen.getByLabelText('category2'));
			expect(onClickMock).toHaveBeenCalledWith('category2', false);
			expect(screen.getByLabelText('category2')).toHaveStyle({
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
			expect(screen.getByRole('listitem')).toContainElement(
				screen.getByLabelText('+')
			);
		});
		test('Changes after pressing checkbox', () => {
			render(
				<Category
					onClick={onClickMock}
					name='category2'
				/>
			);
			userEvent.click(screen.getByLabelText('+'));
			expect(onClickMock).toHaveBeenCalledWith('category2', true);
			expect(screen.getByLabelText('+')).toHaveTextContent('-');
		});
	});
});
