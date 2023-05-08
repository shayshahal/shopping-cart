import Control from './Control';

export default function Item(props) {
	const onDelete = () => {
		props.setCartItems((prev) => {
			const { [props.item.id]: arr, ...cart } = prev;
			return cart;
		});
	};
	const onChange = (e) => {
		props.setCartItems((prev) => {
			return {
				...prev,
				[props.item.id]: [props.item, e.target.value],
			};
		});
	};
	const onIncrement = () => {
		props.setCartItems((prev) => {
			return { ...prev, [props.item.id]: [props.item, props.amount + 1] };
		});
	};
	const onDecrement = () => {
		props.setCartItems((prev) => {
			return {
				...prev,
				[props.item.id]: [props.item, Math.max(props.amount - 1, 1)],
			};
		});
	};
	return (
		<div
			className='grid grid-cols-2 grid-rows-item gap-x-4 border-b-2 border-dark-blue p-2'
			data-testid='item-container'
		>
			<img
				alt={props.item.title}
				src={props.item.thumbnail}
				className='row-span-2 object-contain'
			/>
			<h3 className='text-end italic'>{props.item.title}</h3>
			<p className='pb-4 text-end font-medium'>
				{props.item.price.toLocaleString('en-US')}$
			</p>
			<Control
				amount={props.amount}
				onChange={onChange}
				onIncrement={onIncrement}
				onDecrement={onDecrement}
				onDelete={onDelete}
			/>
		</div>
	);
}
