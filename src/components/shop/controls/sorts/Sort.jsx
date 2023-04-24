import CircumIcon from '@klarr-agency/circum-icons-react';

export default function Sort(props) {
	function handleChange() {
		props.onClick(props.name);
	}
	return (
		<label
			htmlFor={props.name}
			className={
				'flex cursor-pointer rounded-full border-2 border-dark-blue' +
				(props.isChecked ? ' bg-dark-blue' : '')
			}
		>
			<input
				type='radio'
				name='radio'
				id={props.name}
				className='appearance-none'
				checked={props.isChecked}
				onChange={handleChange}
			/>
			<CircumIcon
				name={props.name}
				color={props.isChecked ? '#fff' : '#070912'}
				size='36px'
			/>
		</label>
	);
}
