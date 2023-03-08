import { useState } from 'react';
import Cart from './Cart';
import styles from '/src/styles/navbar/cart/CartToggle.module.css';
export default function CartToggle(props) {
	const [isCartShowing, setIsCartShowing] = useState(false);
	function toggleCart() {
		setIsCartShowing((prev) => !prev);
	}
	return (
		<div
			className={styles.CartContainer}
			data-testid='cartToggle-container'
		>
			<button
				onClick={toggleCart}
				className={styles.CartToggle}
				data-testid='cartToggle-button'
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
