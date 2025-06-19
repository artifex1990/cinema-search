import Bookmark from '../../UI/Bookmark/Bookmark';

const BookmarkLink = ({ url }) => (
	<a href={url ? url : '#'}>
		<Bookmark />
	</a>
);

export default BookmarkLink;
