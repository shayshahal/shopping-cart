import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CartAnimation.module.css';
import Item from './item/Item';

export default function Cart(props) {
	const cartRef = useRef();
	const navigate = useNavigate();

	// Check for click outside of cart
	useEffect(() => {
		let handleClick = (e) => {
			if (!cartRef.current.contains(e.target))
				cartRef.current.classList.add(styles.slideOut);
		};
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	});

	function handleCheckOut() {
		if (Object.entries(props.cartItems).length)
			navigate('/Complete', { state: props.cartItems });
	}
	return (
		<div
			data-testid='cart-container'
			className={
				'fixed left-0 right-0 top-0 z-50 flex h-screen flex-col gap-4 bg-white px-4 pb-4 text-very-dark-blue shadow-2xl md:left-1/2 xl:left-3/4' +
				' ' +
				styles.Cart
			}
			onAnimationEnd={(e) => {
				if (e.animationName.includes('slideOut')) {
					e.target.classList.remove(styles.slideOut);
					props.onClose();
				}
			}}
			ref={cartRef}
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
				className='grid grid-flow-row auto-rows-auto overflow-auto'
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
											[k]: [v[0], Math.max(v[1]--, 1)],
										};
									});
								}}
							/>
					  ))}
			</div>
			<button
				className='mt-auto border-2 border-dark-blue py-4 font-normal hover:bg-dark-blue hover:text-white'
				onClick={() => {
					handleCheckOut();
					cartRef.current.classList.add(styles.slideOut);
				}}
			>
				Checkout
			</button>
		</div>
	);
}
