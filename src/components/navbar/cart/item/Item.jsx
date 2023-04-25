import Control from './Control';

export default function Item(props) {
	return (
		<div
			className='grid gap-x-4 p-2 pt-4 border-dark-blue border-b-2 grid-cols-2 grid-rows-item'
			data-testid='item-container'
		>
			<img
				alt={props.item.title}
				src={props.item.thumbnail}
				className='row-span-2 object-contain'
			/>
			<h3 className='text-end italic'>{props.item.title}</h3>
			<p className='text-end font-medium pb-4'>
				{props.item.price.toLocaleString('en-US')}$
			</p>
			<Control
				amount={props.amount}
				onChange={props.onChange}
				onIncrement={props.onIncrement}
				onDecrement={props.onDecrement}
				onDelete={props.onDelete}
			/>
		</div>
	);
}
