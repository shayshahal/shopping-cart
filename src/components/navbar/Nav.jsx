import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '/src/styles/navbar/Nav.module.css';
import '../../styles/navbar/Nav.css'
import CartToggle from './cart/CartToggle';
import Search from './Search';

export default function Nav() {
	return (
		<nav>
			<NavLink className={styles.NavLink} to='/'>Home</NavLink>
			<NavLink className={styles.NavLink} to='/Shop'>Shop</NavLink>
			<Search data-testid='search' />
			<NavLink className={styles.NavLink} to='/About'>About</NavLink>
			<CartToggle data-testid='cart-toggle' />
		</nav>
	);
}
