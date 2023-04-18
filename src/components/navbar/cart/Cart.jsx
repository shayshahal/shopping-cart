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
			data-testid='cart-container'
			className={
				styles.Cart +
				' fixed left-3/4 right-0 top-0 z-50 grid h-screen gap-4 bg-white p-4 text-very-dark-blue shadow-2xl'
			}
			onAnimationEnd={(e) => {
				if (e.animationName.includes('slideOut')) {
					e.target.classList.remove(styles.slideOut);
					props.onClose();
				}
			}}
		>
			<div className='flex flex-wrap items-center justify-between border-b-2 border-very-dark-blue py-3'>
				<button
					onClick={(e) => {
						e.target.parentNode.parentNode.classList.add(
							styles.slideOut
						);
					}}
					className='text-5xl'
					data-testid='close-btn'
				>
					☰
				</button>
				<span className='text-5xl font-normal italic'>Your Cart</span>
			</div>
			<div
				data-testid='cart-itemList'
				className='overflow-auto'
			>
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
				className='border-2 border-dark-blue font-normal hover:bg-dark-blue hover:text-white'
				onClick={handleCheckOut}
			>
				Checkout
			</button>
		</div>
	);
}
