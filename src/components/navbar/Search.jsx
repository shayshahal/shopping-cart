import { useNavigate} from 'react-router-dom';
import styles from '/src/styles/navbar/Search.module.css';

export default function Search(props) {
	const navigate = useNavigate();
	function handleSearch(e) {
		props.setSearchParams(e.target.value, {replace: true});
	}
	return (
		<div
			className={styles.divContainer}
			data-testid='search-container'
		>
			<label htmlFor='search' />
			<input
				placeholder='Search here...'
				type='search'
				name='search'
				id='search'
				onChange={handleSearch}
				onFocus={() => {
					navigate('/Shop');
				}}
				autoComplete='off'
			/>
		</div>
	);
}
