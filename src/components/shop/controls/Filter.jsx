import CircumIcon from '@klarr-agency/circum-icons-react';

export default function Filter(props) {
	function handleChange(e) {
		props.onChange((prev) => ({
			...prev,
			[props.name]: {
				...prev[props.name],
				[e.target.name]: e.target.value,
			},
		}));
	}
	return (
		<fieldset
			className='flex gap-2 justify-self-start'
			data-testid='filter-container'
		>
			<legend className='float-left'>
				<CircumIcon name={props.name==='price'?'dollar':'star'} />
			</legend>
			<label
				htmlFor='min'
				className='w-full rounded-full border-2 border-dark-blue'
			>
				<input
					className='h-full w-full ps-2'
					type='number'
					name='min'
					id='min'
					onChange={handleChange}
					value={props.min}
					step={0.01}
				/>
			</label>
			-
			<label
				htmlFor='max'
				className='w-full rounded-full border-2 border-dark-blue'
			>
				<input
					className='h-full w-full ps-2 '
					type='number'
					name='max'
					id='max'
					onChange={handleChange}
					value={props.max}
					step={0.01}
				/>
			</label>
		</fieldset>
	);
}
