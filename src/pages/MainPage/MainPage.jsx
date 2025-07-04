import BookmarkLink from '../../components/BookmarkLink/BookmarkLink';
import MenuHeaderUnauthorizate from '../../components/MenuHeaderUnauthorizate/MenuHeaderUnauthorizate';
import HeaderLayout from '../../layout/HeaderLayout/HeaderLayout';
import SearchLayout from '../../layout/SearchLayout/SearchLayout';
import CinemaLayout from '../../layout/CinemaLayout/CinemaLayout';

function MainPage() {
	return (
		<>
			<HeaderLayout>
				<BookmarkLink />
				<MenuHeaderUnauthorizate />
			</HeaderLayout>
			<SearchLayout />
			<CinemaLayout />
		</>
	);
}

export default MainPage;
