import { useState } from 'react';
import Cart from './Cart';
import styles from '/src/styles/navbar/cart/CartToggle.module.css';
export default function CartToggle(props) {
	const [isCartShowing, setIsCartShowing] = useState(false);
	function toggleCart() {
		setIsCartShowing((prev) => !prev);
	}
	return (
		<div className={styles.CartContainer}>
			<button
				onClick={toggleCart}
				className={styles.CartToggle}
			></button>
			{isCartShowing && (
				<Cart
					onClose={toggleCart}
					cartItems={props.cartItems}
					setCartItems={props.setCartItems}
				/>
			)}
		</div>
	);
}
