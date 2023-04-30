import CircumIcon from '@klarr-agency/circum-icons-react';
import { Link } from 'react-router-dom';
export default function Product(props) {
	return (
		<li
			className={
				'grid gap-x-10 rounded-sm border-2 border-very-dark-blue shadow-xl' +
				' ' +
				(props.layout === 'Cards'
					? 'grid-rows-card border-opacity-10'
					: 'h-3/6 grid-cols-2 grid-rows-block border-opacity-30 p-4')
			}
		>
			<div
				className={
					'group relative shadow-sm' +
					' ' +
					(props.layout === 'Cards' ? ' ' : 'row-span-4')
				}
			>
				<img
					className={
						'h-full w-full object-cover transition-all group-hover:blur-lg group-focus:blur-lg'
					}
					alt={props.product.title + ' image'}
					src={props.product.thumbnail}
					loading='lazy'
				/>
				<Link
					className='absolute left-1/2 top-1/2 flex w-3/5 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-1 rounded-full bg-dark-blue py-4 text-white opacity-0 transition-all hover:scale-105 group-hover:opacity-100 group-focus:opacity-100'
					to={`/shop/${props.product.title}`}
					state={props.product}
				>
					<CircumIcon
						name='circle_info'
						size='30px'
					></CircumIcon>{' '}
					View Page
				</Link>
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
			<button
				onClick={() => props.addProduct(props.product)}
				className='self-end rounded-b-md bg-dark-blue py-2 text-white transition-transform hover:scale-105'
			>
				Add to Cart
			</button>
		</li>
	);
}
