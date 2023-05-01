export default function Control(props) {
	return (
		<div
			className='col-span-2 flex items-center justify-between pt-4 font-normal
			'
			data-testid='control-container'
		>
			<div className='h-9 '>
				<button
					onClick={props.onDecrement}
					className='h-full w-9 border-2 border-dark-blue'
				>
					{'-'}
				</button>
				<input
					type='number'
					min={1}
					onChange={(e) => {
						if (e.currentTarget.value > 0) props.onChange;
					}}
					value={props.amount}
					className='mx-2 h-full w-32 border-dark-blue bg-dark-blue text-center text-white'
				/>
				<button
					onClick={props.onIncrement}
					className='h-full w-9 border-2 border-dark-blue'
				>
					{'+'}
				</button>
			</div>
			<button
				onClick={props.onDelete}
				className=''
			>
				Delete
			</button>
		</div>
	);
}
