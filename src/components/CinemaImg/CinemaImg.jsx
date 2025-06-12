import Img from '../../UI/Img/Img';
import Rating from '../Rating/Rating';
import styles from './styles.module.css';

function CinemaImg({ image, rating }) {
	return (
		<div className={styles['cinema-img']}>
			<Img src={image} alt="cinema" className={styles['cinema-img']} />
			<div className={styles['cinema-img-component']}>
				<Rating rating={rating} />
			</div>
		</div>
	);
}

export default CinemaImg;
