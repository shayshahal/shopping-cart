import { useState } from 'react';
import styles from '../../styles/Details.module.css';
import CategoryList from './controls/categories/CategoryList';
import FilterList from './controls/filters/FilterList';
import SortList from './controls/sorts/SortList';
import ProductList from './ProductList';

export default function Shop(props) {
	const [isDescending, setIsDescending] = useState(true);
	const sortedAndFilteredList = useState(
		priceSort(props.productList, isDescending)
	);
	function priceSort(products) {
		return products.sort((a, b) => {
			if (isDescending) {
				return b.price - a.price;
			} else {
				return a.price - b.price;
			}
		});
	}

	function alphabeticalSort(products) {
		return products.sort((a, b) => {
			if (isDescending) {
				return a.name.localeCompare(b.name);
			} else {
				return b.name.localeCompare(a.name);
			}
		});
	}

	function stockAmountSort(products) {
		return products.sort((a, b) => {
			if (isDescending) {
				return b.stock - a.stock;
			} else {
				return a.stock - b.stock;
			}
		});
	}
	return (
		<main className={styles.home}>
			<CategoryList />
			<FilterList />
			<SortList
				sortsFunctionsList={[
					priceSort,
					alphabeticalSort,
					stockAmountSort,
				]}
			/>
			<ProductList />
		</main>
	);
}
