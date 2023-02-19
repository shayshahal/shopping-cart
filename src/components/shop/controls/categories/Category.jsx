import styles from '../../../../styles/shop/controls/categories/Category.module.css';

export default function Category(props) {
	function handleChange(e) {
		if (e.target.checked) {
			props.onClick((prev) => {
				let set = new Set(prev);
				set.add(props.name);
				return set;
			});
		} else {
			props.onClick((prev) => {
				let set = new Set(prev);
				set.delete(props.name);
				return set;
			});
		}
	}
	return (
		<li className={styles.category}>
			<input
				className={styles.category}
				type='checkbox'
				id={props.name}
				onChange={handleChange}
				checked={props.isChecked}
			/>
			<label
				htmlFor={props.name}
				className={styles.categoryLabel}
			>
				{props.name}
			</label>
		</li>
	);
}
