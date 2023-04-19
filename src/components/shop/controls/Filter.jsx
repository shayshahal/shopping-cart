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
			<legend className='float-left'><CircumIcon name={props.name}/></legend>
			<label htmlFor='min' className='w-24 border-2 rounded-full ps-2 border-very-dark-blue'>
				<input
					className='w-full h-full'
					type='number'
					name='min'
					id='min'
					onChange={handleChange}
					value={props.min}
					step={0.01}
				/>
			</label>
			-
			<label htmlFor='max' className='w-24 border-2 rounded-full ps-2 border-very-dark-blue'>
				<input
					className='w-full h-full'
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
