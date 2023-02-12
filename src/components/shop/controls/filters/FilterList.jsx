import styles from '/src/styles/shop/controls/FilterList.module.css';
import Filter from './Filter'

export default function FilterList(props) {
	return <div className={styles.FilterList}>
		<Filter name='price' onChange={props.onChange}/>
		<Filter name='rating' onChange={props.onChange}/>
	</div>;
}
