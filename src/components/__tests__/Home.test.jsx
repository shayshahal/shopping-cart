import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Shop from '../shop/Shop';

describe('Home tests', () => {
	test('home button should directs to shop', async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					></Route>
					<Route
						path='/shop'
						element={
							<Shop
								productList={[]}
								addProduct={vi.fn()}
							/>
						}
					></Route>
				</Routes>
			</MemoryRouter>
		);
		const button = screen.getByRole('link', { name: 'Go to Shop →' });
		await act(async () => {
			await user.click(button);
		});
		await waitFor(() => {
			expect(screen.getByTestId('shop')).toBeInTheDocument();
		});
	});
});
