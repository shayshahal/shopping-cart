import Control from './Control';
import styles from '/src/styles/navbar/cart/item/Item.module.css';

export default function Item(props) {
	return (
		<div className={styles.Item}>
			<img
				alt={props.item.title}
				src={props.item.images.at(-1)}
				className={styles.itemImage}
			/>
			<h3 className={styles.itemName}>{props.item.title}</h3>
			<p className={styles.itemPrice}>
				{props.item.price.toLocaleString('en-US')}$
			</p>
			<Control
				amount={props.amount}
				onChange={props.onChange}
				onIncrement={props.onIncrement}
				onDecrement={props.onDecrement}
				onDelete={props.onDelete}
			/>
		</div>
	);
}
