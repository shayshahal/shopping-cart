export default function SortDirection(props) {
	function handleChange() {
		props.onChange((prev) => !prev);
	}
	return (
		<label
			htmlFor='dirCB'
			className='cursor-pointer rounded-full bg-dark-blue px-4 py-2 text-white transition-transform focus-within:scale-110 hover:scale-110'
		>
			⇅
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
