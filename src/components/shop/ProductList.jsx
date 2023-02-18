import React from 'react';
import styles from '../../styles/shop/ProductList.module.css';
import Product from './product/Product';
function ProductList(props) {
	return (
		<ul className={styles.ProductList}>
			{
			props.sortedAndFilteredList.map((product) => (
				<Product
					key={product.id}
					product={product}
					addProduct={props.addProduct}
				/>
			))}
		</ul>
	);
}

export default ProductList;
