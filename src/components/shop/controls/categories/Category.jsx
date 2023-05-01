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
		<li className={'px-2' + ' ' + (props.isChecked ? '' : 'opacity-60')}>
			<label
				htmlFor={props.name}
				className='flex cursor-pointer items-center gap-2'
			>
				<input
					className='cursor-pointer focus:ring-2'
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
