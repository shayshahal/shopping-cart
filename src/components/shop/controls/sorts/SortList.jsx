import Sort from './Sort';
import SortDirection from './SortDirection';
import styles from '/src/styles/shop/controls/sorts/SortList.module.css';

export default function SortList(props) {
	return (
		<div
			className={styles.SortList}
			data-testid='sort-list'
		>
			<SortDirection
				onChange={props.onDirectionChange}
				isDescending={props.isDescending}
			/>
			{Object.entries(props.sortFunctions).map(([key, value]) => {
				return (
					<Sort
						key={key}
						name={key}
						isChecked={key === props.checked}
						onClick={props.onSortChange}
					/>
				);
			})}
		</div>
	);
}
