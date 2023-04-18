import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<main
			className={
				'bg-start grid content-center justify-items-center gap-8 bg-home-mobile bg-cover bg-bottom bg-no-repeat text-center lg:bg-home'
			}
		>
			<h1 className='text-5xl font-thin italic lg:text-9xl'>
				Shopping Cart
			</h1>
			<span
				className='text-3xl font-thin italic lg:text-5xl'
				data-testid='paragraph'
			>
				A project by Shay Shahal, following The Odin Project curriculum.
			</span>
			<Link
				className='mt-8 self-center justify-self-center border-2 border-dark-blue px-6 py-3 text-dark-blue shadow-md hover:rounded hover:bg-dark-blue hover:text-white'
				to='/Shop'
			>
				Go to Shop →
			</Link>
		</main>
	);
}
