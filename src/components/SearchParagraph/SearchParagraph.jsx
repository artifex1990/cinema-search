import Paragraph from '../../UI/Paragraph/Paragraph';
import styles from './styles.module.css';

function SearchParagraph({ children }) {
	return <Paragraph className={styles.paragraph}>{children}</Paragraph>;
}

export default SearchParagraph;
