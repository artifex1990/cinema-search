import CommonButton from '../CommonButton/CommonButton';
import SearchInput from '../SearchInput/SearchInput';
import styles from './styles.module.css';

function SearchForm({ onClick }) {
	return (
		<div className={styles['search-form']}>
			<SearchInput />
			<CommonButton className={styles.button} onClick={onClick}>
				Искать
			</CommonButton>
		</div>
	);
}

export default SearchForm;
