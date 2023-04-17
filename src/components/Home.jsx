import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<main className='grid content-start justify-items-center gap-8 bg-home bg-cover bg-center bg-no-repeat'>
			<img src="/assets/shopping.png" alt="shopping image" className='max-h-64'/>
			<h1 className='text-9xl italic font-thin text-dark-gold'>Shopping Cart</h1>
			<span
				className='text-5xl font-thin italic'
				data-testid='paragraph'
			>
				A project by Shay Shahal, following The Odin Project curriculum.
			</span>
			<Link
				className='mt-8 self-center justify-self-center border-2 border-dark-gold px-6 py-3 text-dark-gold shadow-md hover:rounded hover:bg-dark-gold hover:text-white'
				to='/Shop'
			>
				Go to Shop →
			</Link>
		</main>
	);
}
