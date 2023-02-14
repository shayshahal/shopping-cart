import styles from '/src/styles/shop/controls/filters/Filter.module.css';

export default function Filter(props) {
	function handleChange(e) {
		props.onChange((prev) => ({
			...prev,
			[props.name]: {
				...prev[props.name],
				[e.target.name]: e.target.value,
			},
		}));
	}
	return (
		<div className={styles.Filter}>
			<label>{props.name}: </label>
			<input
				className={styles.input}
				type='number'
				name='min'
				onChange={handleChange}
				value={props.min}
				step={0.01}
			/>
			-
			<input
				className={styles.input}
				type='number'
				name='max'
				onChange={handleChange}
				value={props.max}
				step={0.01}
			/>
		</div>
	);
}
