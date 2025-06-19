import Img from '../Img/Img';
import styles from './styles.module.css';

function Input({ placeholder, className, imgUrl }) {
	const classNames = className ? `${styles.input} ${className}` : styles.input;
	return (
		<div className={styles.inputContainer}>
			{imgUrl && (
				<Img src={imgUrl} alt="Иконка поиска" className={styles.img} />
			)}
			<input type="text" className={classNames} placeholder={placeholder} />
		</div>
	);
}

export default Input;
