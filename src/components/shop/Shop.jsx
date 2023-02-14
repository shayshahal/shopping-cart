import { useState } from 'react';
import styles from '../../styles/shop/Shop.module.css';
import CategoryList from './controls/categories/CategoryList';
import FilterList from './controls/filters/FilterList';
import SortList from './controls/sorts/SortList';
import ProductList from './ProductList';

export default function Shop(props) {
	const [isDescending, setIsDescending] = useState(true);
	const [activeSort, setActiveSort] = useState('price');
	const [activeCategories, setActiveCategories] = useState(new Set());
	const [filters, setFilters] = useState({
		price: { min: 0, max: 100000 },
		rating: { min: 0, max: 5 },
	});
	const sortFunctions = {
		price: function priceSort(a, b) {
			if (isDescending) {
				return b.price - a.price;
			} else {
				return a.price - b.price;
			}
		},
		alphabet: function alphabeticalSort(a, b) {
			if (isDescending) {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		},
		rating: function ratingSort(a, b) {
			if (isDescending) {
				return b.rating - a.rating;
			} else {
				return a.rating - b.rating;
			}
		},
	};
	const sortedAndFilteredList = props.productList
		.sort((a, b) => sortFunctions[activeSort](a, b))
		.filter((product) => {
			return (
				filterProduct(product) &&
				((activeCategories.has(product.category) &&
					activeCategories.size !== 0) ||
					activeCategories.size === 0)
			);
		});
	function categoryChange(categoryName, isAdd) {
		if (isAdd) {
			setActiveCategories((set) => {
				set.add(categoryName);
				return set;
			});
		} else {
			setActiveCategories((set) => {
				set.delete(categoryName);
				return set;
			});
		}
	}

	function filterProduct(product) {
		for (const [k, v] of Object.entries(filters)) {
			if (product[k] < v.min || product[k] > v.max) return false;
		}
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
					onAction={categoryChange}
					activeCategories={activeCategories}
				/>
				<FilterList
					onChange={setFilters}
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
