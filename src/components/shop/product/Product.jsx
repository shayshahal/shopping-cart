import ControlProduct from './ControlProduct';
import styles from '/src/styles/shop/product/Product.module.css';

export default function Product(props) {
	return (
		<li
			className={
				'grid rounded-sm border-2 border-dark-blue p-2 shadow-2xl' +
				' ' +
				(props.layout === 'Cards'
					? 'grid-rows-card'
					: 'grid-cols-2 grid-rows-4 lg:w-3/4')
			}
		>
			<img
				className={
					'h-full w-full object-top' +
					' ' +
					(props.layout === 'Cards'
						? ' object-cover'
						: 'row-span-4 object-contain object-left')
				}
				alt={props.product.title + ' image'}
				src={props.product.thumbnail}
				loading='lazy'
			/>
			<div className='text-xl italic'>{props.product.title}</div>
			<div className='text-2xl font-extrabold'>
				{props.product.price.toLocaleString('en-US')}$
			</div>
			<div className='flex'>
				<img
					className='w-4'
					alt='star'
					src='assets/star.svg'
					loading='lazy'
				/>{' '}
				{props.product.rating}
			</div>
			<ControlProduct
				onAdd={props.addProduct}
				product={props.product}
			/>
		</li>
	);
}
