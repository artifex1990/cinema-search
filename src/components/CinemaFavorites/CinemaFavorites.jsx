import Img from '../../UI/Img/Img';
import styles from './styles.module.css';

function CinemaFavorites({ isFavorites = false }) {
	const classNames = isFavorites
		? `${styles.cinemaFavorites} ${styles.active}`
		: styles.cinemaFavorites;

	const logoFavoriteSrc = isFavorites
		? './logo/bookmark_favorites.svg'
		: './logo/like.svg';
	const namesFavorite = isFavorites ? 'В избраном' : 'В избранное';

	return (
		<div className={classNames}>
			<Img
				src={logoFavoriteSrc}
				alt="favorites"
				className={styles.cinemaFavoritesImg}
			/>
			<span>{namesFavorite}</span>
		</div>
	);
}

export default CinemaFavorites;
