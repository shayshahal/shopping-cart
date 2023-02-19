import styles from '/src/styles/navbar/cart/item/Control.module.css';

export default function Control(props) {
	return (
		<div className={styles.Control}>
			<span className={styles.amountControl}>
				<button onClick={props.onDecrement} className={styles.decBtn}>{'-'}</button>
				<input
					type='number'
					min={1}
					onChange={props.onChange}
					value={props.amount}
                    className={styles.amountInput}
				/>
				<button onClick={props.onIncrement} className={styles.incBtn}>{'+'}</button>
			</span>
            <button onClick={props.onDelete} className={styles.dltBtn}>Delete</button>
		</div>
	);
}
