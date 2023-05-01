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
			className='fixed bottom-10 right-10 grid h-20 w-20 place-content-stretch border-2 md:border-none border-very-dark-blue bg-dark-blue shadow-2xl md:relative md:bottom-auto md:right-auto md:clear-left md:h-full md:w-full md:flex-1'
			data-testid='cartToggle-container'
		>
			<button
				onClick={toggleCart}
				className='relative grid h-full w-full place-content-center'
				data-testid='cartToggle-button'
			>
				{' '}
				<div className='relative'>
					<CircumIcon
						name='shopping_cart'
						color='#fff'
						size='48px'
					/>{' '}
					{Object.entries(props.cartItems).length > 0 && (
						<span className='absolute right-1/2 top-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-center text-xl font-bold text-very-dark-blue'>
							{Object.entries(props.cartItems).length}
						</span>
					)}
				</div>
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
