import styles from '/src/styles/shop/controls/CategoryList.module.css';
import Category from './Category';
import { useState, useEffect } from 'react';

export default function CategoryList(props) {
	const [categoryList, setCategoryList] = useState([]);
	useEffect(()=>{
		async function fetchCategories() {
			let response = await fetch('https://dummyjson.com/products/categories');
			let data = await response.json();
			return data;
		}
		fetchCategories().then(data=>{setCategoryList(data)})
	}, [])
	return <ul className={styles.categoryList}>
        {categoryList.map((category, i)=> <Category key={i} name={category} onClick={props.onAction}/>)}
    </ul>;
}
