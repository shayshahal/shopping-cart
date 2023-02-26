import { useNavigate } from 'react-router-dom';
import Item from './item/Item';
import styles from '/src/styles/navbar/cart/Cart.module.css';

export default function Cart(props) {
	const navigate = useNavigate();
	function handleCheckOut() {
		if (Object.entries(props.cartItems).length)
			navigate('/Complete', { state: props.cartItems });
	}
	return (
		<div
			className={styles.Cart}
			onAnimationEnd={(e) => {
				if (e.animationName.includes('slideOut')) {
					e.target.classList.remove(styles.slideOut);
					props.onClose();
				}
			}}
		>
			<div className={styles.head}>
				<button
					onClick={(e) => {
						e.target.parentNode.parentNode.classList.add(
							styles.slideOut
						);
					}}
					className={styles.closeBtn}
				>
					☰
				</button>
				<span className={styles.cartTitle}>Your Cart</span>
			</div>
			<div className={styles.itemList}>
				{Object.entries(props.cartItems).length === 0
					? 'Your cart is empty.'
					: Object.entries(props.cartItems).map(([k, v]) => (
							<Item
								key={k}
								item={v[0]}
								amount={v[1]}
								onDelete={() => {
									props.setCartItems((prev) => {
										const { [k]: arr, ...cart } = prev;
										return cart;
									});
								}}
								onChange={(e) => {
									props.setCartItems((prev) => {
										return {
											...prev,
											[k]: [v[0], e.target.value],
										};
									});
								}}
								onIncrement={() => {
									props.setCartItems((prev) => {
										return { ...prev, [k]: [v[0], v[1]++] };
									});
								}}
								onDecrement={() => {
									props.setCartItems((prev) => {
										return {
											...prev,
											[k]: [v[0], Math.min(v[1]--, 1)],
										};
									});
								}}
							/>
					  ))}
			</div>
			<button
				className={styles.checkOutBtn}
				onClick={handleCheckOut}
			>
				Checkout
			</button>
		</div>
	);
}
