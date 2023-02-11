import styles from '/src/styles/shop/controls/SortDirection.module.css';

export default function SortDirection(props) {
	return (
		<div className={styles.SortDirection}>
			<label htmlFor='dirCB' className={styles.label}>
				{props.isDescending ? 'Dsc' : 'Asc'} ⇅
			</label>
			<input
				type='checkbox'
				id='dirCB'
				onChange={props.onChange}
				className={styles.checkbox}
			/>
		</div>
	);
}
