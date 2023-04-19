export default function SortDirection(props) {
	function handleChange() {
		props.onChange((prev) => !prev);
	}
	return (
		<label
			htmlFor='dirCB'
			className='rounded-full bg-dark-blue text-white px-4 cursor-pointer'
		>
			{props.isDescending ? 'Dsc' : 'Asc'} ⇅
			<input
				type='checkbox'
				id='dirCB'
				onChange={handleChange}
				className='appearance-none'
				checked={props.isDescending}
			/>
		</label>
	);
}
