import { Outlet } from 'react-router-dom';
import Nav from './navbar/Nav';

export default function PageLayout(props) {
	return (
		<>
			<Nav
				cartItems={props.cartItems}
				setCartItems={props.setCartItems}
			/>
			<Outlet />
		</>
	);
}
