import CinemaFavorites from '../CinemaFavorites/CinemaFavorites';
import CinemaImg from '../CinemaImg/CinemaImg';
import styles from './styles.module.css';

function CinemaCard({ cinema }) {
	return (
		<div className={styles['cinema-card']}>
			<CinemaImg image={cinema.image} rating={cinema.rating} />
			<div className={styles['cinema-info']}>
				<h3 className={styles['cinema-name']}>{cinema.name}</h3>
				<CinemaFavorites isFavorites={cinema.isFavorites} />
			</div>
		</div>
	);
}

export default CinemaCard;
