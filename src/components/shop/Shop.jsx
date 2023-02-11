import { useEffect, useState } from 'react';
import styles from '../../styles/shop/Shop.module.css';
import CategoryList from './controls/categories/CategoryList';
import FilterList from './controls/filters/FilterList';
import SortList from './controls/sorts/SortList';
import ProductList from './ProductList';

export default function Shop(props) {
	const [isDescending, setIsDescending] = useState(true);
	const [sortedAndFilteredList, setSortedAndFilteredList] = useState(
		props.productList
	);
	const [activeSortFunction, setActiveSortFunction] = useState(
		() => priceSort
	);
	const [activeCategoryList, setActiveCategoryList] = useState(new Set());
	const [activeFilterMap, setActiveFilterMap] = useState(new Map());
	function priceSort(productList) {
		return productList.sort((a, b) => {
			if (isDescending) {
				return b.price - a.price;
			} else {
				return a.price - b.price;
			}
		});
	}

	function alphabeticalSort(productList) {
		return productList.sort((a, b) => {
			if (isDescending) {
				return a.name.localeCompare(b.name);
			} else {
				return b.name.localeCompare(a.name);
			}
		});
	}

	function stockAmountSort(productList) {
		return productList.sort((a, b) => {
			if (isDescending) {
				return b.stock - a.stock;
			} else {
				return a.stock - b.stock;
			}
		});
	}
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
			setSortedAndFilteredList((list) =>
				list.filter(
					(product) =>
						filterFunction(product[filterName]) &&
						activeCategoryList.has(product.category)
				)
			);
		}
		setSortedAndFilteredList(activeSortFunction(sortedAndFilteredList));
		return () => {};
	}, [activeCategoryList, activeFilterMap, activeSortFunction]);

	return (
		<main className={styles.shop}>
			<CategoryList onAction={categoryChange} />
			<FilterList onChange={filterChange} />
			<SortList
				sortFunctions={[priceSort, alphabeticalSort, stockAmountSort]}
				onSortChange={setActiveSortFunction}
				isDescending={isDescending}
				onDirectionChange={() => {
					setIsDescending((prev) => !prev);
				}}
			/>
			<ProductList
				sortedAndFilteredList={sortedAndFilteredList}
				addProduct={props.addProduct}
			/>
		</main>
	);
}
