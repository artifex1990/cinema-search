import Img from '../../UI/Img/Img';
import Rating from '../Rating/Rating';
import styles from './styles.module.css';

function CinemaImg({ image, rating }) {
	return (
		<div className={styles.cinemaImg}>
			<Img src={image} alt="cinema" className={styles.cinemaImg} />
			<div className={styles.cinemaImgComponent}>
				<Rating rating={rating} />
			</div>
		</div>
	);
}

export default CinemaImg;
