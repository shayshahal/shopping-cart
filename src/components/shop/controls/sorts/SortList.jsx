import Sort from '../../controls/sorts/Sort';
import SortDirection from '../../controls/sorts/SortDirection';
import styles from '/src/styles/shop/controls/sorts/SortList.module.css';

export default function SortList(props) {
	return (
		<div className={styles.SortList}>
			<SortDirection onChange={props.onDirectionChange} isDescending={props.isDescending}/>
			{
				Object.entries(props.sortFunctions).map(([key, value]) => {
					return (
                        <Sort
                            key={key}
                            name={key}
							isChecked={key === props.checked}
							onClick={props.onSortChange}
                            sortFunction={value}
                        />
                    )
				})
			}
		</div>
	);
}
