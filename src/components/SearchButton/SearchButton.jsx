import Button from '../../UI/Button/Button';
import styles from './styles.module.css';

function SearchButton({ onClick }) {
	return (
		<Button type="submit" className={styles.button} onClick={onClick}>
			Искать
		</Button>
	);
}

export default SearchButton;
