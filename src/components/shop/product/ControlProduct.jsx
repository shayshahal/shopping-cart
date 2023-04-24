import CircumIcons from '@klarr-agency/circum-icons-react';
import { Link } from 'react-router-dom';
import styles from '/src/styles/shop/product/ControlProduct.module.css';
export default function ControlProduct(props) {
	return (
		<div
			className='flex justify-between gap-2 self-end p-2'
			data-testid='controlProduct-container'
		>
						<Link
				className='border-dark-blue transition-transform hover:scale-110'
				to={`/shop/${props.product.title}`}
				state={props.product}
			>
				<CircumIcons name='circle_info' color='#070912'/>
			</Link>
			<button
				onClick={() => props.onAdd(props.product)}
				className='flex-1 bg-dark-blue text-white rounded-md transition-transform hover:scale-105'
			>
				Add to Cart
			</button>

		</div>
	);
}
