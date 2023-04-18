import { NavLink } from 'react-router-dom';
import '../../styles/navbar/Nav.css';
import Search from './Search';
import CartToggle from './cart/CartToggle';

export default function Nav(props) {
	return (
		<nav className='z-40 flex flex-col md:flex-row justify-stretch bg-very-dark-blue text-center text-2xl font-thin italic text-white shadow-2xl'>
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
			<CartToggle
				cartItems={props.cartItems}
				setCartItems={props.setCartItems}
			/>
		</nav>
	);
}
