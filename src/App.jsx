import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Complete from './components/Complete.jsx';
import Details from './components/Details.jsx';
import Home from './components/Home.jsx';
import Nav from './components/navbar/Nav.jsx';
import Shop from './components/shop/Shop.jsx';
// Do lazy loading

export default function App() {
	const [cartItems, setCartItems] = useState([]);

	function addItemToCart(item) {
		setCartItems((prev) => [...prev, item]);
	}

	return (
		<BrowserRouter init>
			<Nav />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/Shop'
					element={<Shop addProduct={addItemToCart} />}
				/>
				<Route
					path='/Shop:name'
					element={<Details />}
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
