import styles from '/src/styles/shop/controls/Sort.module.css';

export default function Sort(props) {
	return (
		<div className={styles.Sort}>
			<label
				htmlFor={props.name}
				className={styles.label}
			>
				{props.name}
			</label>
			<input
				type='radio'
				name='radio'
				id={props.name}
				className={styles.radio}
			/>
		</div>
	);
}
