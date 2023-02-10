import { useState } from 'react';
import styles from '../../styles/Details.module.css';
import CategoryList from './controls/categories/CategoryList';
import FilterList from './controls/filters/FilterList';
import SortList from './controls/sorts/SortList';
import ProductList from './ProductList';

export default function Shop(props) {
	const [sortedAndFilteredList, setSortedAndFilteredList] = useState(
		props.productList
	);
	const [activeSortFunction, setActiveSortFunction] = useState(null);
	const [activeCategoryList, setActiveCategoryList] = useState(new Set());
	const [activeFilterMap, setActiveFilterMap] = useState(new Map());

	function filterChange(filterName, filterFunction) {
		setActiveFilterMap((map) => {
			map.set(filterName, filterFunction);
			return map;
		});
	}
	function categoryChange(categoryName, isAdd) {
		if (isAdd) {
			setActiveCategoryList((set) => {
				set.add(categoryName);
				return set;
			});
		} else {
			setActiveCategoryList((set) => {
				set.delete(categoryName);
				return set;
			});
		}
	}

	useEffect(() => {
		for ([filterName, filterFunction] of activeFilterMap) {
			props.productList.filter(
				(product) =>
					filterFunction(product[filterName]) &&
					activeCategoryList.has(product.category)
			);
		}
		setSortedAndFilteredList(activeSortFunction(props.productList));
		return () => {};
	}, [activeCategoryList, activeFilterMap, activeSortFunction]);

	return (
		<main className={styles.home}>
			<CategoryList
				onChange={categoryChange}
			/>
			<FilterList onChange={filterChange}/>
			<SortList
				onChange={setActiveSortFunction}
			/>
			<ProductList
				sortedAndFilteredList={sortedAndFilteredList}
				addProduct={props.addProduct}
			/>
		</main>
	);
}
