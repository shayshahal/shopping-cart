import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Complete from './components/Complete.jsx';
import Home from './components/Home.jsx';
import PageLayout from './components/PageLayout.jsx';
import Details from './components/details/Details.jsx';
import Shop from './components/shop/Shop.jsx';

export default function App() {
	const [cartItems, setCartItems] = useState({});
	const [productsList, setProductsList] = useState([]);

	// fetch products from the product mocks API
	useEffect(() => {
		const controller = new AbortController();
		async function fetchProducts() {
			let response = await fetch(
				'https://dummyjson.com/products?limit=100&skip=0',
				{ signal: controller.signal }
			);
			let data = await response.json();
			setProductsList(data.products);
		}
		fetchProducts().catch(() => console.log('canceled fetch!'));
		return () => {
			controller.abort();
		};
	}, []);

	function addItemToCart(item) {
		setCartItems((prev) => {
			return item.id in prev ? prev : { ...prev, [item.id]: [item, 1] };
		});
	}

	return (
		// Using HashRouter for Github Pages
		<HashRouter>
			<Routes>
				<Route
					element={
						<PageLayout
							cartItems={cartItems}
							setCartItems={setCartItems}
						/>
					}
				>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/Shop'
						element={
							<Shop
								productList={productsList}
								addProduct={addItemToCart}
							/>
						}
					/>
					<Route
						path='/Shop/:title'
						element={<Details onAdd={addItemToCart} />}
					/>
					<Route
						path='/Complete'
						element={<Complete />}
					/>
				</Route>
			</Routes>
		</HashRouter>
	);
}
