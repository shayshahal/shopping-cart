import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../../styles/shop/Shop.module.css';
import ProductList from './ProductList';
import Layout from './controls/Layout';
import CategoryList from './controls/categories/CategoryList';
import FilterList from './controls/filters/FilterList';
import SortList from './controls/sorts/SortList';

export default function Shop(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [isDescending, setIsDescending] = useState(true);
	const [activeSort, setActiveSort] = useState('dollar');
	const [activeCategories, setActiveCategories] = useState(new Set());
	const [productLayout, setProductLayout] = useState('Cards'); // Card / Blocks

	const [filters, setFilters] = useState({
		price: { min: 0, max: 100000 },
		rating: { min: 0, max: 5 },
	});

	const sortFunctions = {
		dollar: (a, b) => {
			if (isDescending) {
				return b.price - a.price;
			} else {
				return a.price - b.price;
			}
		},
		text: (a, b) => {
			if (isDescending) {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		},
		star: (a, b) => {
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
		<main className=''>
			<div className='grid grid-cols-2 gap-y-4 p-4'>
				<SortList
					sortFunctions={sortFunctions}
					checked={activeSort}
					onSortChange={setActiveSort}
					isDescending={isDescending}
					onDirectionChange={setIsDescending}
				/>
				<Layout
					layout={productLayout}
					setLayout={setProductLayout}
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
				productLayout={productLayout}
			/>
		</main>
	);
}
