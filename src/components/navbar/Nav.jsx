import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '/src/styles/navbar/Nav.module.css';

import Cart from './cart/Cart';
import Search from './Search';

export default function Nav() {
	return (
		<nav className='Nav'>
			<Link to='/'>Home</Link>
			<Link to='/Shop'>Shop</Link>
			<Search data-testid='search' />
			<Link to='/About'>About</Link>
			<Cart data-testid='cart' />
		</nav>
	);
}
