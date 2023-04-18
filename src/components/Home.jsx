import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<main className={'grid content-center justify-items-center gap-8 bg-home bg-no-repeat bg-cover'}>
			<h1 className='text-9xl font-thin italic'>
				Shopping Cart
			</h1>
			<span
				className='text-5xl font-thin italic'
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
