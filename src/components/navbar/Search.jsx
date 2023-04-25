import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	function handleSearch(e) {
		setSearchParams({ q: e.target.value }, { replace: true });
	}
	return (
		<label
			className='order-last text-start md:order-none md:flex-5'
			htmlFor='search'
			data-testid='search-container'
		>
			<input
				placeholder='Search here...'
				className='h-full w-1/2 px-4 py-1 text-3xl outline-none transition-all focus:w-full'
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
