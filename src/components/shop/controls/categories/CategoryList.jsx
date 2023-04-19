import { useEffect, useState } from 'react';
import Category from './Category';
import styles from '/src/styles/shop/controls/categories/CategoryList.module.css';

export default function CategoryList(props) {
	const [categoryList, setCategoryList] = useState([]);
	useEffect(() => {
		async function fetchCategories() {
			let response = await fetch(
				'https://dummyjson.com/products/categories'
			);
			let data = await response.json();
			return data;
		}
		fetchCategories().then((data) => {
			setCategoryList(data);
		});
	}, []);

	function handleClick() {
		props.onCategoryClick(new Set());
	}

	return (
		<ul className='col-span-2 grid grid-cols-2 justify-items-start gap-2 relative'>
			<button
				className='absolute bottom-0 right-0'
				onClick={handleClick}
				name='reset'
			>
				reset
			</button>
			{categoryList.map((category, i) => (
				<Category
					key={i}
					name={category}
					onClick={props.onCategoryClick}
					isChecked={props.activeCategories.has(category)}
				/>
			))}
		</ul>
	);
}
