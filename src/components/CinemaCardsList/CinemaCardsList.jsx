import CinemaCard from '../CinemaCard/CinemaCard';
import styles from './styles.module.css';
import { cinemaMock } from '../../mocks';

function CinemaCardsList() {
	const films = cinemaMock() || [];
	return (
		<div className={styles.cinemaList}>
			{films.map((cinema) => (
				<CinemaCard key={cinema.id} cinema={cinema} />
			))}
		</div>
	);
}

export default CinemaCardsList;
