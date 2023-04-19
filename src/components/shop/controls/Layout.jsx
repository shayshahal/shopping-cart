import CircumIcon from '@klarr-agency/circum-icons-react';

export default function Layout(props) {
	const handleClick = (e) => props.setLayout(e.currentTarget.id);
	return (
		<div className='grid w-28 grid-cols-2 items-center rounded-full border-2 border-dark-blue'>
			<label
				htmlFor='Cards'
				className={'flex justify-center rounded-l-full cursor-pointer' + (props.layout === 'Cards' ? ' bg-dark-blue' : ' ')}
			>
				<CircumIcon
					name='grid_4-1'
					color={(props.layout === 'Cards' ? '#fff' : '#000')}
					size='36px'
				/>
				<input
					className='appearance-none'
					onClick={handleClick}
					type='radio'
					name='layout'
					id='Cards'
					checked={props.layout === 'Cards'}
				/>
			</label>
			<label
				htmlFor='Blocks'
				className={'flex justify-center rounded-r-full cursor-pointer' + (props.layout === 'Blocks' ? ' bg-dark-blue' : ' ')}
			>
				<CircumIcon
					name='grid_2-h'
					color={(props.layout === 'Blocks' ? '#fff' : '#000')}
					size='36px'
				/>
				<input
					className='appearance-none'
					onClick={handleClick}
					type='radio'
					name='layout'
					id='Blocks'
					checked={props.layout === 'Blocks'}
				/>
			</label>
		</div>
	);
}
