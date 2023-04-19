export default function Category(props) {
	function handleChange(e) {
		if (e.target.checked) {
			props.onClick((prev) => {
				let set = new Set(prev);
				set.add(props.name);
				return set;
			});
		} else {
			props.onClick((prev) => {
				let set = new Set(prev);
				set.delete(props.name);
				return set;
			});
		}
	}
	return (
		<li className={'border-2 rounded-full border-very-dark-blue px-2' + (props.isChecked ? ' bg-very-dark-blue text-white': '')}>
			<label
				htmlFor={props.name}
				className='flex h-full w-full items-center text-center gap-0.5'
			>
				{props.isChecked ? '-' : '+'}
				<input
					className='appearance-none'
					type='checkbox'
					id={props.name}
					onChange={handleChange}
					checked={props.isChecked}
				/>
				{props.name}
			</label>
		</li>
	);
}
