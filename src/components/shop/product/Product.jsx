import ControlHover from './ControlHover';
import styles from '/src/styles/shop/product/Product.module.css';

export default function Product(props) {
	return (
		<li className={styles.Product}>
			<img
				className={styles.image}
				alt={props.product.title}
				src={props.product.images.at(-1)}
			/>
			<h3 className={styles.name}>{props.product.title}</h3>
			<span className={styles.price}>{props.product.price}$</span>
			<span className={styles.rating}>{props.product.rating}</span>
			<ControlHover
				onAdd={props.addProduct}
				product={props.product}
			/>
		</li>
	);
}
