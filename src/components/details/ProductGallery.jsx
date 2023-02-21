import { useState } from 'react';
import styles from '../../styles/details/ProductGallery.module.css';

export default function ProductGallery(props) {
	const [bigImage, setBigImage] = useState(props.images.at(-1));
	return (
		<div className={styles.ProductGallery}>
			<img
				alt={'big image'}
				src={bigImage}
				className={styles.bigImage}
			/>
			{props.images.map((image, index) => (
				<button
					key={index}
					onClick={() => {
						setBigImage(image);
					}}
					className={styles.imageBtn}
				>
					<img
						className={styles.image}
						alt='image button'
						src={image}
					/>
				</button>
			))}
		</div>
	);
}
