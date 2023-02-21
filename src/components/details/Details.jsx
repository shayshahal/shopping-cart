import { useLocation } from 'react-router-dom';
import styles from '../../styles/details/Details.module.css';
import ProductGallery from './ProductGallery';

export default function Details() {
	const location = useLocation();
	return (
		<main className={styles.Details}>
			<ProductGallery images={location.state.images} />
			<div className={styles.productDetails}>
				<div className={styles.title}>{location.state.title}</div>
				<div className={styles.price}>
					{(~~(
						(location.state.price *
							(100 - location.state.discountPercentage)) /
						100
					)).toLocaleString('en-US')}
					{'$ '}
					<span className={styles.discount}>
						{location.state.price.toLocaleString('en-US')}$
					</span>
				</div>
				<div className={styles.rating}>
					{' '}
					<img
						className={styles.star}
						alt='star'
						src='/star.svg'
						loading='lazy'
					/>{' '}
					{location.state.rating}
				</div>
				<div className={styles.stock}>
					Amount left: {location.state.stock}
				</div>
				<p className={styles.description}>
					{location.state.description}.
				</p>
				<button className={styles.addButton}>Add to Cart</button>
			</div>
		</main>
	);
}
