import CircumIcon from '@klarr-agency/circum-icons-react'; // React
import { useState } from 'react';
import Cart from './Cart';

export default function CartToggle(props) {
	const [isCartShowing, setIsCartShowing] = useState(false);
	function toggleCart() {
		setIsCartShowing((prev) => !prev);
	}
	return (
		<div
			className='fixed bottom-5 right-5 grid h-20 w-20 place-content-stretch rounded-full bg-dark-blue shadow-2xl md:relative md:bottom-auto md:right-auto md:clear-left md:h-full md:w-full md:flex-1 md:rounded-none'
			data-testid='cartToggle-container'
		>
			<button
				onClick={toggleCart}
				className='grid h-full w-full place-content-center md:rounded-none'
				data-testid='cartToggle-button'
			>
				{' '}
				<CircumIcon
					name='shopping_cart'
					color='#fff'
					size='48px'
				/>
			</button>

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
