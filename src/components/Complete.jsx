import { useLocation } from 'react-router-dom';
import styles from '../styles/Complete.module.css';

export default function Complete() {
	const location = useLocation();
	console.log(location.state);
	return (
		<main className={styles.Complete}>
			<h1 className={styles.thanks}>Thank you for purchasing in our site!</h1>
			<div className={styles.itemList}>
				{Object.entries(location.state).map(([k, v]) => 
					(<div
						key={k}
						className={styles.item}
					>
						<img
							alt={v[0].title}
							src={v[0].thumbnail}
							className={styles.itemImage}
						/>
						<h3 className={styles.itemName}>{v[0].title}</h3>
						<div className={styles.itemPrice}>
							{v[0].price.toLocaleString('en-US')}$
						</div>
						<div className={styles.itemAmount}>Amount: {v[1]}</div>
					</div>
				))}
			</div>
		</main>
	);
}
