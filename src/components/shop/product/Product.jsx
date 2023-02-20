import ControlProduct from './ControlProduct';
import styles from '/src/styles/shop/product/Product.module.css';

export default function Product(props) {
	return (
		<li className={styles.Product}>
			<img
				className={styles.image}
				alt={props.product.title}
				src={props.product.images.at(-1)}
			/>
			<div className={styles.name}>{props.product.title}</div>
			<div className={styles.price}>{props.product.price.toLocaleString('en-US')}$</div>
			<div className={styles.rating}>
				<img
					className={styles.star}
					alt='star'
					src={'/src/assets/star.svg'}
				/>{' '}
				{props.product.rating}
			</div>
			<ControlProduct
				onAdd={props.addProduct}
				product={props.product}
			/>
		</li>
	);
}
