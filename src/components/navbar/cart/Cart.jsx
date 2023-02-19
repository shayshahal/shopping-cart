import Item from './item/Item';
import styles from '/src/styles/navbar/cart/Cart.module.css';

export default function Cart(props) {
	return (
		<div className={styles.Cart}>
			<h1 className={styles.title}>Cart</h1>
			{Object.entries(props.cartItems).map((k, v) => (
				<Item
					key={k}
					item={v[0]}
					amount={v[1]}
					onDelete={() => {
						props.setCartItems((prev) => {
							let cart = prev;
							delete cart[k];
							return cart;
						});
					}}
					onChange={(e) => {props.setCartItems((prev) => {
						let cart = prev;
                        cart[k][1] = e.target.value;
                        return cart;
					})}}
					onIncrement={() => {props.setCartItems((prev) => {
						let cart = prev;
                        cart[k][1]++;
                        return cart;
					})}}
					onDecrement={() => {props.setCartItems((prev) => {
						let cart = prev;
                        cart[k][1]--;
                        return cart;
					})}}
				/>
			))}
			<div className={styles.buttons}>
				<button onClick={handleCheckOut}>Checkout</button>
			</div>
		</div>
	);
}
