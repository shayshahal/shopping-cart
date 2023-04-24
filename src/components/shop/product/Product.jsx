import ControlProduct from './ControlProduct';
import styles from '/src/styles/shop/product/Product.module.css';

export default function Product(props) {
	return (
		<li
			className={
				'grid gap-x-10 rounded-sm border-2 border-very-dark-blue border-opacity-10 shadow-xl' +
				' ' +
				(props.layout === 'Cards'
					? 'grid-rows-card'
					: 'h-3/5 grid-cols-2 grid-rows-block p-4')
			}
		>
			<div
				className={
					'shadow-sm' +
					' ' +
					(props.layout === 'Cards'
						? 'border-b-2 border-very-dark-blue border-opacity-10 '
						: 'row-span-4')
				}
			>
				<img
					className={'h-full w-full object-cover'}
					alt={props.product.title + ' image'}
					src={props.product.thumbnail}
					loading='lazy'
				/>
			</div>
			<div
				className={
					'px-2 pt-1 italic' +
					' ' +
					(props.layout === 'Cards'
						? 'text-xl'
						: 'text-end text-2xl md:text-3xl')
				}
			>
				{props.product.title}
			</div>
			<div
				className={
					'px-2 font-extrabold' +
					' ' +
					(props.layout === 'Cards'
						? 'text-2xl'
						: 'text-end text-3xl md:text-4xl')
				}
			>
				{props.product.price.toLocaleString('en-US')}$
			</div>
			<div
				className={
					'flex items-center px-2' +
					' ' +
					(props.layout === 'Cards' ? '' : 'justify-end text-xl')
				}
			>
				<img
					className='h-4'
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
