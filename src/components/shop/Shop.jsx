import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../../styles/shop/Shop.module.css';
import CategoryList from './controls/categories/CategoryList';
import FilterList from './controls/filters/FilterList';
import SortList from './controls/sorts/SortList';
import ProductList from './ProductList';

export default function Shop(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [isDescending, setIsDescending] = useState(true);
	const [activeSort, setActiveSort] = useState('price');
	const [activeCategories, setActiveCategories] = useState(new Set());
	const [filters, setFilters] = useState({
		price: { min: 0, max: 100000 },
		rating: { min: 0, max: 5 },
	});
	const sortFunctions = {
		price: (a, b) => {
			if (isDescending) {
				return b.price - a.price;
			} else {
				return a.price - b.price;
			}
		},
		alphabet: (a, b) => {
			if (isDescending) {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		},
		rating: (a, b) => {
			if (isDescending) {
				return b.rating - a.rating;
			} else {
				return a.rating - b.rating;
			}
		},
	};
	const sortedAndFilteredList = props.productList
		.sort((a, b) => sortFunctions[activeSort](a, b))
		.filter((product) => filterProduct(product));
	function filterProduct(product) {
		if (
			(!activeCategories.has(product.category) &&
				activeCategories.size !== 0) ||
			!product.title
				.toLowerCase()
				.includes(
					searchParams.get('q')
						? searchParams.get('q').toLowerCase()
						: ''
				)
		)
			return false;
		for (const [k, v] of Object.entries(filters))
			if (product[k] < v.min || product[k] > v.max) return false;
		return true;
	}
	return (
		<main className={styles.Shop}>
			<div className={styles.controls}>
				<SortList
					sortFunctions={sortFunctions}
					checked={activeSort}
					onSortChange={setActiveSort}
					isDescending={isDescending}
					onDirectionChange={setIsDescending}
				/>
				<CategoryList
					onCategoryClick={setActiveCategories}
					activeCategories={activeCategories}
				/>
				<FilterList
					onFilterChange={setFilters}
					filters={filters}
				/>
			</div>

			<ProductList
				sortedAndFilteredList={sortedAndFilteredList}
				addProduct={props.addProduct}
			/>
		</main>
	);
}
