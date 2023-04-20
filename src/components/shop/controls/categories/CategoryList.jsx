import CircumIcon from '@klarr-agency/circum-icons-react';
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
		<ul className='relative col-span-2 grid flex-1 grid-cols-3 items-center justify-items-center gap-4 border-y-2 border-very-dark-blue p-2 md:grid-cols-2 md:gap-0 '>
			<button
				className='absolute bottom-0.5 right-0 hover:rotate-180 transition-transform'
				onClick={handleClick}
				name='reset'
			>
				<CircumIcon name='redo' />
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
