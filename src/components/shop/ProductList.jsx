import React from 'react';
import styles from '../../styles/shop/ProductList.module.css';
import Product from './product/Product';
function ProductList(props) {
	return (
		<ul
			className={
				'flex-1 overflow-y-auto gap-4 p-8' + ' ' +
				(props.layout === 'Cards'
					? 'grid grid-cols-fluid auto-rows-card'
					: 'flex flex-col')
			}
		>
			{props.sortedAndFilteredList.map((product) => (
				<Product
					key={product.id}
					product={product}
					addProduct={props.addProduct}
					layout={props.layout}
				/>
			))}
		</ul>
	);
}

export default ProductList;
