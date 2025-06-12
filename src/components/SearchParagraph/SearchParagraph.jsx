import Paragraph from '../../UI/Paragraph/Paragraph';
import styles from './styles.module.css';

function SearchParagraph({ children }) {
	return (
		<div className={styles.paragraph}>
			<Paragraph className={styles.paragraph__content}>{children}</Paragraph>
		</div>
	);
}

export default SearchParagraph;
