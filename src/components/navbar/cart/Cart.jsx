import Item from './item/Item';
import styles from '/src/styles/navbar/cart/Cart.module.css';

export default function Cart(props) {
	function handleCheckOut() {}
	return (
		<div className={styles.Cart}>
			{console.log(props.cartItems)}
			<button
				onClick={props.onClose}
				className={styles.closeBtn}
			>
				☰
			</button>
			<div className={styles.itemList}>
				{Object.entries(props.cartItems).map(([k, v]) => (
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
								return { ...prev, [k]: [v[0], e.target.value] };
							});
						}}
						onIncrement={() => {
							props.setCartItems((prev) => {
								return { ...prev, [k]: [v[0], v[1]++] };
							});
						}}
						onDecrement={() => {
							props.setCartItems((prev) => {
								return { ...prev, [k]: [v[0], v[1]--] };
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
