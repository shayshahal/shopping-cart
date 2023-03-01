import styles from '/src/styles/shop/controls/sorts/SortDirection.module.css';

export default function SortDirection(props) {
	function handleChange() {
		props.onChange((prev) => !prev);
	}
	return (
		<div
			className={styles.SortDirection}
			data-testid='sortDirection-container'
		>
			<label
				htmlFor='dirCB'
				className={styles.label}
			>
				{props.isDescending ? 'Dsc' : 'Asc'} ⇅
			</label>
			<input
				type='checkbox'
				id='dirCB'
				onChange={handleChange}
				className={styles.checkbox}
				checked={props.isDescending}
			/>
		</div>
	);
}
