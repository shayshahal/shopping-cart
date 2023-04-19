import CircumIcon from '@klarr-agency/circum-icons-react';

export default function Layout(props) {
	const handleClick = (e) => props.setLayout(e.currentTarget.id);
	return (
		<div className='grid grid-cols-2 items-center rounded-full border-2 border-very-dark-blue md:w-36'>
			<label
				htmlFor='Cards'
				className={
					'flex cursor-pointer justify-center rounded-l-full' +
					(props.layout === 'Cards' ? ' bg-very-dark-blue' : ' ')
				}
			>
				<CircumIcon
					name='grid_4-1'
					color={props.layout === 'Cards' ? '#fff' : '#070912'}
					size='36px'
				/>
				<input
					className='appearance-none'
					onChange={handleClick}
					type='radio'
					name='layout'
					id='Cards'
					checked={props.layout === 'Cards'}
				/>
			</label>
			<label
				htmlFor='Blocks'
				className={
					'flex cursor-pointer justify-center rounded-r-full' +
					(props.layout === 'Blocks' ? ' bg-very-dark-blue' : ' ')
				}
			>
				<CircumIcon
					name='grid_2-h'
					color={props.layout === 'Blocks' ? '#fff' : '#070912'}
					size='36px'
				/>
				<input
					className='appearance-none'
					onChange={handleClick}
					type='radio'
					name='layout'
					id='Blocks'
					checked={props.layout === 'Blocks'}
				/>
			</label>
		</div>
	);
}
