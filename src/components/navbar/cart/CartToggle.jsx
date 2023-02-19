import { useState } from 'react';
import Cart from './Cart';
import styles from '/src/styles/navbar/cart/CartToggle.module.css';
export default function CartToggle(props) {
	const [isCartShowing, setIsCartShowing] = useState(false);
	function toggleCart() {
		setIsCartShowing((prev) => !prev);
	}
	return (
		<button
			className={styles.cartToggle}
			onClick={toggleCart}
		>
			{isCartShowing && (
				<Cart
					onClose={toggleCart}
					cartItems={props.cartItems}
					addItem={props.addItem}
					removeItem={props.removeItem}
					setCartItems={props.setCartItems}
				/>
			)}
		</button>
	);
}
