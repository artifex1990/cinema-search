import Link from '../../UI/Link/Link';
import styles from './styles.module.css';

function Anchor({ url, text, children }) {
	return (
		<div className={styles.anchor}>
			<Link url={url} text={text} />
			{children}
		</div>
	);
}

export default Anchor;
