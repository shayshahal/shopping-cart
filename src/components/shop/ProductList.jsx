import React from 'react';
import Product from './Product';
function ProductList(props) {
	return (
		<ul
			className={
				'flex-1 gap-8 overflow-y-auto p-8' +
				' ' +
				(props.layout === 'Cards'
					? 'grid auto-rows-card grid-cols-fluid'
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
