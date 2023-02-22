import {Link} from 'react-router-dom';
import styles from '/src/styles/shop/product/ControlProduct.module.css';

export default function ControlProduct(props) {
	return (
		<div className={styles.ControlProduct}>
			<button
				onClick={() => props.onAdd(props.product)}
				className={styles.button}
			>
				Add to Cart
			</button>
			<Link
				className={styles.details}
				to={
					`/shop/${props.product.title}`
				}
				state={props.product} 
			>
				ⓘ
			</Link>
		</div>
	);
}
