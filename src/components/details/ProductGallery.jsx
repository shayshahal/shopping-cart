import { useState } from 'react';

export default function ProductGallery(props) {
	const [bigImage, setBigImage] = useState(props.images.at(-1));

	return (
		<div className='flex flex-col place-content-center items-center gap-32'>
			<img
				alt={'big image'}
				src={bigImage}
				className=' h-1/2 shadow-2xl'
			/>
			<div className='flex flex-wrap items-stretch justify-between gap-4'>
				{props.images.map((image, index) => (
					<button
						key={index}
						onClick={() => {
							setBigImage(image);
						}}
					>
						<img
							className='h-20 object-cover shadow-xl'
							alt='image button'
							src={image}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
