import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	function handleSearch(e) {
		setSearchParams({ q: e.target.value }, { replace: true });
	}
	return (
		<label
			className='text-start md:flex-5 order-last md:order-none'
			htmlFor='search'
			data-testid='search-container'
		>
			<input
				placeholder='Search here...'
				className='w-1/2 h-full text-3xl py-1 px-4 transition-all focus:w-full outline-none'
				type='search'
				name='search'
				id='search'
				onChange={handleSearch}
				onFocus={() => {
					navigate('/Shop');
				}}
				autoComplete='off'
			/>
		</label>
	);
}
