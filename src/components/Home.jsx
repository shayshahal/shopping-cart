import CircumIcon from '@klarr-agency/circum-icons-react';
import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<main
			className={
				'bg-start grid content-center justify-items-center gap-8 bg-home-mobile bg-cover bg-bottom bg-no-repeat text-center lg:bg-home'
			}
			data-testid='home'
		>
			<h1 className='text-5xl font-thin italic md:text-7xl xl:text-9xl animate-slideIn'>
				Shopping Cart
			</h1>
			<span
				className='text-2xl font-thin italic md:text-4xl xl:text-5xl animate-fadeIn'
				data-testid='paragraph'
			>
				A project by Shay Shahal, following The Odin Project curriculum.
			</span>
			<Link
				className='mt-8 self-center justify-self-center border-2 animate-fadeIn border-dark-blue px-6 py-3 text-dark-blue shadow-md hover:rounded hover:bg-dark-blue hover:text-white'
				to='/Shop'
			>
				Go to Shop →
			</Link>
			<p className='absolute bottom-1 left-2 text-xl font-thin italic text-white'>
				© Shay Shahal
			</p>
			<div className='absolute bottom-1 right-2 flex h-9 gap-2'>
				<a
					className='cursor-pointer transition-transform hover:scale-110'
					href='#'
					target='_blank'
				>
					<CircumIcon
						name='linkedin'
						color='#fff'
						size='36px'
					/>
				</a>
				<a className='cursor-pointer transition-transform hover:scale-110'>
					<img
						src='/assets/github-mark-white.svg'
						className='h-full py-1'
						alt='github link'
					/>
				</a>
			</div>
		</main>
	);
}
