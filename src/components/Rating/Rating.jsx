import Img from '../../UI/Img/Img';
import styles from './styles.module.css';

function Rating({ rating = 0 }) {
	return (
		<div className={styles.rating}>
			<Img src="./logo/rating.svg" alt="rating" />
			<span>{rating}</span>
		</div>
	);
}

export default Rating;
