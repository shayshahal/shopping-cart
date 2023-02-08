import styles from '/src/styles/navbar/Search.module.css';

export default function Search() {
	return (
		<div
			className='Search'
			data-testid='search-container'
		>
			<label htmlFor='search' />
			<input
				type='search'
				name='search'
				id='search'
				onChange={null}
			/>
		</div>
	);
}
