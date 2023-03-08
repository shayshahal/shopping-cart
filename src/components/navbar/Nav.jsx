import { NavLink } from 'react-router-dom';
import styles from '/src/styles/navbar/Nav.module.css';
import '../../styles/navbar/Nav.css'
import CartToggle from './cart/CartToggle';
import Search from './Search';

export default function Nav(props) {
	return (
		<nav>
			<NavLink className={styles.NavLink + ' ' + styles.home} to='/'>Home</NavLink>
			<NavLink className={styles.NavLink + ' ' + styles.shop} to='/Shop'>Shop</NavLink>
			<Search data-testid='search'/>
			<NavLink className={styles.NavLink + ' ' + styles.about} to='/About'>About</NavLink>
			<CartToggle cartItems={props.cartItems} setCartItems={props.setCartItems}/>
		</nav>
	);
}
