import styles from '/src/styles/shop/controls/sorts/Sort.module.css';

export default function Sort(props) {
	function handleChange() {
		props.onClick(props.name);
	}
	return (
		<div
			className={styles.Sort}
			data-testid='sort-container'
		>
			<input
				type='radio'
				name='radio'
				id={props.name}
				className={styles.radio}
				checked={props.isChecked}
				onChange={handleChange}
			/>
			<label
				htmlFor={props.name}
				className={styles.label}
			>
				{props.name}
			</label>
		</div>
	);
}
