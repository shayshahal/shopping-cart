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
			<div className='flex items-stretch gap-4 flex-wrap justify-between'>
				{props.images.map((image, index) => (
					<button
						key={index}
						onClick={() => {
							setBigImage(image);
						}}
					>
						<img
							className='object-cover shadow-xl h-20'
							alt='image button'
							src={image}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
