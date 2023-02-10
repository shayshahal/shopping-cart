import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';
describe('Home tests', () => {
	test('Home should render ', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		expect(screen.getByRole('main')).toBeInTheDocument();
	});
	test('should render an h1', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
	test('should render a paragraph', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		expect(screen.getByTestId('paragraph')).toBeInTheDocument();
	});
	test('should render a button', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		expect(screen.getByRole('link')).toBeInTheDocument();
	});
});
