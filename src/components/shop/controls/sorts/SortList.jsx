import Sort from './Sort';
import SortDirection from './SortDirection';

export default function SortList(props) {
	return (
		<div
			className='flex items-center justify-between gap-4 px-4'
			data-testid='sort-list'
		>
			<SortDirection
				onChange={props.onDirectionChange}
				isDescending={props.isDescending}
			/>
			{Object.keys(props.sortFunctions).map((key) => {
				return (
					<Sort
						key={key}
						name={key}
						isChecked={key === props.checked}
						onClick={props.onSortChange}
					/>
				);
			})}
		</div>
	);
}
