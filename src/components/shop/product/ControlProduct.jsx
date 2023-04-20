import { Link } from 'react-router-dom';
import styles from '/src/styles/shop/product/ControlProduct.module.css';
import CircumIcons from '@klarr-agency/circum-icons-react'
export default function ControlProduct(props) {
	return (
		<div
			className='flex justify-between gap-2 self-end'
			data-testid='controlProduct-container'
		>
			<button
				onClick={() => props.onAdd(props.product)}
				className='flex-1 border-dark-blue border-2 hover:bg-dark-blue hover:text-white'
			>
				Add to Cart
			</button>
			<Link
				className='border-dark-blue border-2'
				to={`/shop/${props.product.title}`}
				state={props.product}
			>
				<CircumIcons name='circle_info'/>
			</Link>
		</div>
	);
}
