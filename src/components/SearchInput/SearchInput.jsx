import Input from '../../UI/Input/Input';
import styles from './styles.module.css';

function SearchInput({ onChange }) {
	return (
		<Input
			type="text"
			imgUrl={'./logo/search.svg'}
			className={styles.input}
			placeholder={'Введите название'}
			onChange={onChange}
		/>
	);
}

export default SearchInput;
