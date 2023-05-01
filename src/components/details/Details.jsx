import { useLocation } from 'react-router-dom';
import ProductGallery from './ProductGallery';

export default function Details(props) {
	const location = useLocation();
	return (
		<main className='grid gap-16 bg-auto p-12 md:grid-flow-col md:grid-cols-2'>
			<ProductGallery images={location.state.images} />
			<div className='flex flex-col'>
				<div className='py-4 text-7xl font-thin italic'>
					{location.state.title}
				</div>
				<div className='text-5xl'>
					{(~~(
						(location.state.price *
							(100 - location.state.discountPercentage)) /
						100
					)).toLocaleString('en-US')}
					{'$ '}
					<span className='text-3xl text-dark-blue line-through decoration-dark-blue '>
						{location.state.price.toLocaleString('en-US')}$
					</span>
				</div>
				<div className='flex items-center gap-1 text-2xl'>
					{' '}
					<img
						className='inline-block h-4'
						alt='star'
						src='/assets/star.svg'
						loading='lazy'
					/>{' '}
					{location.state.rating}
				</div>
				<div className='text-xl'>
					Amount left: {location.state.stock}
				</div>
				<p className='w-3/4 break-words py-4 text-2xl'>
					{location.state.description}.
				</p>
				<button
					className='mt-auto self-end border-2 border-dark-blue px-16 py-4 text-3xl font-bold text-dark-blue hover:bg-dark-blue hover:text-white'
					onClick={() => {
						props.onAdd(location.state);
					}}
				>
					Add to Cart
				</button>
			</div>
		</main>
	);
}
