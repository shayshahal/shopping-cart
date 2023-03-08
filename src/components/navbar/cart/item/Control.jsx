import styles from '/src/styles/navbar/cart/item/Control.module.css';

export default function Control(props) {
	return (
		<div
			className={styles.Control}
			data-testid='control-container'
		>
			<span className={styles.amountControl}>
				<button
					onClick={props.onDecrement}
					className={styles.amountBtn}
				>
					{'-'}
				</button>
				<input
					type='number'
					min={1}
					onChange={props.onChange}
					value={props.amount}
					className={styles.amountInput}
				/>
				<button
					onClick={props.onIncrement}
					className={styles.amountBtn}
				>
					{'+'}
				</button>
			</span>
			<button
				onClick={props.onDelete}
				className={styles.dltBtn}
			>
				Delete
			</button>
		</div>
	);
}
