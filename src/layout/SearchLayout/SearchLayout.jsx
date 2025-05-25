import MainHeader from '../../components/MainHeader/MainHeader';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchParagraph from '../../components/SearchParagraph/SearchParagraph';
import styles from './styles.module.css';

function SearchLayout() {
	function handleSearch() {
		console.log('search');
	}

	return (
		<div className={styles['search-layout']}>
			<MainHeader>Поиск</MainHeader>
			<SearchParagraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления
				в избранное.
			</SearchParagraph>
			<SearchForm onClick={handleSearch} />
		</div>
	);
}

export default SearchLayout;
