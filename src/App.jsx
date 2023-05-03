import React, { useEffect, useState } from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Complete from './components/Complete.jsx';
import Home from './components/Home.jsx';
import PageLayout from './components/PageLayout.jsx';
import Details from './components/details/Details.jsx';
import Shop from './components/shop/Shop.jsx';
// Do lazy loading

async function loadFakeProducts() {
	const productsResponse = await fetch(
		'https://dummyjson.com/products?limit=100&skip=0'
	);
	const productsData = await productsResponse.json();
	const categoriesResponse = await fetch(
		'https://dummyjson.com/products/categories'
	);
	const categoriesData = await categoriesResponse.json();
	const products = productsData.products;
	const categories = categoriesData;
	return { products, categories };
}

export default function App() {
	const [cartItems, setCartItems] = useState({});
	function addItemToCart(item) {
		setCartItems((prev) => [...prev, item]);
	}
	function addItemToCart(item) {
		setCartItems((prev) => {
			return item.id in prev ? prev : { ...prev, [item.id]: [item, 1] };
		});
	}

	const router = createBrowserRouter(
		createRoutesFromElements(
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
							addProduct={addItemToCart}
						/>
					}
					loader={loadFakeProducts}
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
		)
	);

	return <RouterProvider router={router} />;
}
