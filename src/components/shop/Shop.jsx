import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import Search from './Search';
import Filter from './controls/Filter.jsx';
import Layout from './controls/Layout';
import CategoryList from './controls/categories/CategoryList';
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
		// Price sorting function
		dollar: (a, b) => {
			if (isDescending) {
				return b.price - a.price;
			} else {
				return a.price - b.price;
			}
		},
		// Alphabetical sorting function
		text: (a, b) => {
			if (isDescending) {
				return a.title.localeCompare(b.title);
			} else {
				return b.title.localeCompare(a.title);
			}
		},
		// Rating sorting function
		star: (a, b) => {
			if (isDescending) {
				return b.rating - a.rating;
			} else {
				return a.rating - b.rating;
			}
		},
	};

	// The sorted and filtered list based on the user's inputs.
	// Note that this variable is not a state variable because it is already dependent on other state variables
	// in the component
	const sortedAndFilteredList = props.productList
		.sort((a, b) => sortFunctions[activeSort](a, b))
		.filter((product) => filterProduct(product));

	function filterProduct(product) {
		// Checking if:
		if (
			// 1. product has any of the active categories
			(!activeCategories.has(product.category) &&
				activeCategories.size !== 0) ||
			// 2. product has a name that includes the user's search input
			!product.title
				.toLowerCase()
				.includes(
					searchParams.get('q')
						? searchParams.get('q').toLowerCase()
						: ''
				)
		)
			return false;

		// 3. product is in range of filters
		for (const [k, v] of Object.entries(filters))
			if (product[k] < v.min || product[k] > v.max) return false;

		// If reached here, product passed the filter
		return true;
	}

	return (
		<main
			className='flex flex-1 flex-col md:flex-row md:overflow-hidden'
			data-testid='shop'
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className='flex flex-col gap-y-4 border-b-4 border-very-dark-blue border-opacity-10 px-2 py-4 md:w-1/3 md:border-b-0 md:border-r-2 lg:w-1/4 xl:w-1/5'
			>
				<Layout
					layout={productLayout}
					setLayout={setProductLayout}
				/>
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
				{Object.entries(filters).map(([key, value]) => {
					return (
						<Filter
							key={key}
							name={key}
							onChange={setFilters}
							min={value.min}
							max={value.max}
						/>
					);
				})}
			</form>
			<div className='flex flex-1 flex-col'>
				<Search setSearchParams={setSearchParams} />
				<ProductList
					sortedAndFilteredList={sortedAndFilteredList}
					addProduct={props.addProduct}
					layout={productLayout}
				/>
			</div>
		</main>
	);
}
