import styles from '/src/styles/shop/controls/filters/FilterList.module.css';
import Filter from './Filter'

export default function FilterList(props) {
	return <div className={styles.FilterList}>
		{
			Object.entries(props.filters).map(([key, value]) => {
				return <Filter key={key} name={key} onChange={props.onChange} min={value.min} max={value.max}/>
			})
		}
	</div>;
}
