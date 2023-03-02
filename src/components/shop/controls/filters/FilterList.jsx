import Filter from './Filter';
import styles from '/src/styles/shop/controls/filters/FilterList.module.css';

export default function FilterList(props) {
	return (
		<div
			className={styles.FilterList}
			data-testid='filterList-container'
		>
			{Object.entries(props.filters).map(([key, value]) => {
				return (
					<Filter
						key={key}
						name={key}
						onChange={props.onFilterChange}
						min={value.min}
						max={value.max}
					/>
				);
			})}
		</div>
	);
}
