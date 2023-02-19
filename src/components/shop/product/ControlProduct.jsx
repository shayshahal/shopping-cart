import { Navigate } from 'react-router-dom';
import styles from '/src/styles/shop/product/ControlProduct.module.css';

export default function ControlProduct(props) {
	return (
		<div className={styles.ControlProduct}>
			<button
				onClick={()=>{props.onAdd(props.product)}}
				className={styles.button}
			>
				Add to Cart
			</button>
			<button
				className={styles.details}
				onClick={() => <Navigate to={`/shop:${props.product.id}`} />}
			>
				ⓘ
			</button>
		</div>
	);
}
