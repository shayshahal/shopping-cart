import Sort from '../../controls/sorts/Sort';
import SortDirection from '../../controls/sorts/SortDirection';
import styles from '/src/styles/shop/controls/SortList.module.css';

export default function SortList(props) {
	return (
		<div className={styles.SortList}>
			<Sort
				onClick={props.onSortChange}
				sortFunction={props.sortFunctions[0]}
				name='price'
			/>
			<Sort
				onClick={props.onSortChange}
				sortFunction={props.sortFunctions[1]}
				name='alphabet'
			/>
			<Sort
				onClick={props.onSortChange}
				sortFunction={props.sortFunctions[2]}
				name='stock'
			/>
			<SortDirection onChange={props.onDirectionChange} isDescending={props.isDescending}/>
		</div>
	);
}
