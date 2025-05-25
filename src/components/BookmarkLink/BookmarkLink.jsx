import Bookmark from '../../UI/Bookmark/Bookmark';

function BookmarkLink({ url }) {
	return (
		<div>
			<a href={url ? url : '#'}>
				<Bookmark />
			</a>
		</div>
	);
}

export default BookmarkLink;
