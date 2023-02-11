import styles from '/src/styles/shop/controls/CategoryList.module.css';
import Category from './Category';

export default function CategoryList(props) {
	const categories = [
		'category1',
		'category2',
		'category3',
		'category4',
		'category5',
		'category6',
		'category7',
		'category8',
	];
	return <ul className={styles.categoryList}>
        {categories.map((category, i)=> <Category key={i} name={category} onClick={props.onAction}/>)}
    </ul>;
}
