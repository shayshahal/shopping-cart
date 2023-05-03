import CircumIcon from '@klarr-agency/circum-icons-react';
import Category from './Category';

export default function CategoryList(props) {
	function handleClick() {
		props.onCategoryClick(new Set());
	}

	return (
		<ul className='relative col-span-2 grid flex-1 grid-cols-3 items-center gap-4 border-y-2 border-dark-blue border-opacity-10 p-2 md:grid-cols-2 md:gap-0 '>
			<button
				className='absolute bottom-0.5 right-0 transition-transform hover:rotate-180'
				onClick={handleClick}
				name='reset'
			>
				<CircumIcon
					name='redo'
					color='#12264a'
				/>
			</button>
			{props.categories.map((category, i) => (
				<Category
					key={i}
					name={category}
					onClick={props.onCategoryClick}
					isChecked={props.activeCategories.has(category)}
				/>
			))}
		</ul>
	);
}
