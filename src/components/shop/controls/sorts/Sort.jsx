import styles from '/src/styles/shop/controls/sorts/Sort.module.css';

export default function Sort(props) {
	function handleChange() {
		props.onClick(props.name)
	}
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
				checked={props.isChecked}
				onChange={handleChange}
			/>
		</div>
	);
}
