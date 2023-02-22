import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
	useSearchParams,
} from 'react-router-dom';
import About from './components/About.jsx';
import Complete from './components/Complete.jsx';
import Details from './components/details/Details.jsx';
import Home from './components/Home.jsx';
import Nav from './components/navbar/Nav.jsx';
import Shop from './components/shop/Shop.jsx';
// Do lazy loading

export default function App() {
	const [cartItems, setCartItems] = useState({});
	const [productsList, setProductsList] = useState([]);
	function addItemToCart(item) {
		setCartItems((prev) => [...prev, item]);
	}
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
		<BrowserRouter init>
			<Nav
				cartItems={cartItems}
				setCartItems={setCartItems}
				/*setSearchParams={setSearchParams}*/
			/>
			<Routes>
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
					path='/About'
					element={<About />}
				/>
				<Route
					path='/Complete'
					element={<Complete />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
