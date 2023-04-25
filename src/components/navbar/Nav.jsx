import CircumIcon from '@klarr-agency/circum-icons-react';
import { NavLink } from 'react-router-dom';
import './activeNav.css';
import Search from './Search';
import CartToggle from './cart/CartToggle';

export default function Nav(props) {
	return (
		<nav className='opa z-40 flex flex-col justify-stretch bg-very-dark-blue text-center text-2xl font-thin italic text-white shadow-2xl md:flex-row'>
			<NavLink
				className='flex flex-1 justify-center  py-3'
				to='/'
			>
				<CircumIcon name='home' />
			</NavLink>
			<NavLink
				className='flex flex-1 justify-center  py-3'
				to='/Shop'
			>
				<CircumIcon name='shop' />
			</NavLink>
			<Search data-testid='search' />
			<CartToggle
				cartItems={props.cartItems}
				setCartItems={props.setCartItems}
			/>
		</nav>
	);
}
