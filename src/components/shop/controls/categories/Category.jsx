import { useState } from 'react';
import styles from '../../../../styles/shop/controls/Category.module.css';

export default function Category(props) {
	const [label, setLabel] = useState('+');
	function handleClick(e) {
		props.onClick(e.target.value, true);
	}
	function handleChange(e) {
		props.onClick(e.target.value, e.target.checked);
		setLabel(e.target.checked ? '-' : '+');
	}
	return (
		<li className={styles.category}>
			<label
				htmlFor={props.name}
				className={styles.categoryRadioLabel}
			>
				{props.name}
				<input
					className={styles.categoryCB}
					type='checkbox'
					id={props.name + 'cb'}
					onClick={handleChange}
				/>
				<label
					htmlFor={props.name + 'cb'}
					className={styles.categoryCBLabel}
				>
					{label}
				</label>
			</label>
			<input
				className={styles.categoryRadio}
				type='radio'
				name='radioCategory'
				id={props.name}
				onChange={handleClick}
			/>
		</li>
	);
}
