import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search(props) {
	function handleSearch(e) {
		props.setSearchParams({ q: e.target.value }, { replace: true });
	}
	return (
		<label
			className='flex h-20 border-b-2 transition-all focus-within:h-32'
			htmlFor='search'
			data-testid='search-container'
		>
			<input
				placeholder='Search here...'
				className='px-8 py-1 text-3xl outline-none'
				type='search'
				name='search'
				id='search'
				onChange={handleSearch}
				autoComplete='off'
			/>
		</label>
	);
}
