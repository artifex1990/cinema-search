import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Paragraph from './components/SearchParagraph/SearchParagraph';
import SearchButton from './components/SearchButton/SearchButton';

function App() {
	function handleSearch() {
		console.log('search');
	}

	return (
		<>
			<MainHeader>Поиск</MainHeader>
			<SearchButton onClick={handleSearch} />
			<Paragraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления
				в избранное.
			</Paragraph>
		</>
	);
}

export default App;
