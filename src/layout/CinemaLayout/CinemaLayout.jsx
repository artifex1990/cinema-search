import CinemaCardsList from '../../components/CinemaCardsList/CinemaCardsList';
import styles from './styles.module.css';

function CinemaLayout() {
	return (
		<div className={styles.cinema}>
			<CinemaCardsList />
		</div>
	);
}

export default CinemaLayout;
