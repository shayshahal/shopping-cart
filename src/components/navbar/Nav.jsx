import { NavLink } from 'react-router-dom';
import '../../styles/navbar/Nav.css';
import Search from './Search';
import CartToggle from './cart/CartToggle';
import styles from '/src/styles/navbar/Nav.module.css';

export default function Nav(props) {
	return (
		<nav className='z-40 flex w-full justify-stretch bg-very-dark-blue text-center text-2xl font-thin italic text-white shadow-2xl'>
			<NavLink
				className='flex-1 py-3'
				to='/'
			>
				Home
			</NavLink>
			<NavLink
				className='flex-1 py-3'
				to='/Shop'
			>
				Shop
			</NavLink>
			<Search data-testid='search' />
			<NavLink
				className='flex-1 py-3'
				to='/About'
			>
				About
			</NavLink>
			<CartToggle
				cartItems={props.cartItems}
				setCartItems={props.setCartItems}
			/>
		</nav>
	);
}
