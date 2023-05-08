import { useLocation } from 'react-router-dom';

export default function Complete() {
	const location = useLocation();
	console.log(location.state);
	return (
		<main className='overflow-hidden'>
			<h1 className='py-8 text-center text-5xl font-thin italic md:text-7xl'>
				Thank you for purchasing in our site!
			</h1>
			<div className='mx-auto overflow-auto p-4 lg:w-1/2'>
				{Object.entries(location.state).map(([k, v]) => (
					<div
						key={k}
						className='flex h-24 items-center gap-2 border-b-2 border-dark-blue border-opacity-20'
					>
						<div className=''>x{v[1]}</div>
						<img
							alt={v[0].title}
							src={v[0].thumbnail}
							className='h-3/4 w-48 object-contain'
						/>
						<h3 className='pt-2 text-3xl font-thin italic'>
							{v[0].title}
						</h3>
						<div className='ms-auto text-4xl '>
							{v[0].price.toLocaleString('en-US')}$
						</div>
					</div>
				))}
				<h2 className='pt-4 text-end text-2xl font-thin md:text-3xl'>
					Total cost:{' '}
					<span className='font-normal text-dark-blue'>
						{Object.values(location.state)
							.reduce((sum, v) => sum + v[0].price * v[1], 0)
							.toLocaleString('en-US')}{' '}
						$
					</span>
				</h2>
			</div>
		</main>
	);
}
