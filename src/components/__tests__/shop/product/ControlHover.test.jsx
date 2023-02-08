import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import ControlHover from '../../shop/product/ControlHover';

const onAddMock = vi.fn();

describe('ControlHover component tests', () => {
	test('should render ControlHover component', () => {
		render(<ControlHover onAddMock={onAddMock} />);
		expect(screen.getByTestId('control-hover')).toBeInTheDocument();
	});
	test('should render ControlHover invisible', () => {
		render(<ControlHover onAddMock={onAddMock} />);
		expect(screen.getByTestId('control-hover')).not.toBeVisible();
	});
	test('should render ControlHover visible on hover', () => {
		render(<ControlHover onAddMock={onAddMock} />);
		userEvent.hover(screen.getByTestId('control-hover'));
		expect(screen.getByTestId('control-hover')).toBeVisible();
	});
	test('should render ControlHover with two buttons', () => {
		render(<ControlHover onAddMock={onAddMock} />);
		expect(screen.getAllByRole('button')).toHaveLength(2);
	});
	test('should render ControlHover with one button', () => {
		render(<ControlHover onAddMock={onAddMock} />);
		userEvent.click(screen.getAllByRole('button')[1]);
		expect(onAddMock).toHaveBeenCalled();
	});
});
