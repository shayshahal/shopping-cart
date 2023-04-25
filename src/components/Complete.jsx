import { useLocation } from 'react-router-dom';
import styles from '../styles/Complete.module.css';

export default function Complete() {
	const location = useLocation();
	console.log(location.state);
	return (
		<main>
			<h1 className='px-16 py-8 text-center text-7xl font-thin italic'>
				Thank you for purchasing in our site!
			</h1>
			<div className='grid grid-cols-2 gap-8 px-8 text-end'>
				{Object.entries(location.state).map(([k, v]) => (
					<div
						key={k}
						className='grid h-72 grid-cols-2 grid-rows-block border-2 border-dark-blue pe-2 shadow-xl'
					>
						<img
							alt={v[0].title}
							src={v[0].thumbnail}
							className='row-span-4 h-full w-full object-contain'
						/>
						<h3 className='pt-2 text-3xl italic'>{v[0].title}</h3>
						<div className='text-4xl'>
							{v[0].price.toLocaleString('en-US')}$
						</div>
						<div className='row-span-2 self-end pb-2'>
							Amount: {v[1]}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
