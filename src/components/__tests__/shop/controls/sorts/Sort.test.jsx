import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import Sort from '../../../controls/sorts/Sort';

const onClickMock = vi.fn();

describe('Sort Component tests', () => {
	test('Sort component renders successfully', () => {
		render(
			<Sort
				onClick={onClickMock}
				name='Price'
			/>
		);
		expect(screen.getByRole('listitem')).toBeInTheDocument();
	});
    test('Call onChange on click', () => {
        render(
			<Sort
				onClick={onClickMock}
				name='Price'
			/>
		);
        expect(onClickMock).toHaveBeenCalled();
    })
});
