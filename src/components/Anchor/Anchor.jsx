import Link from '../../UI/Link/Link';
import styles from './styles.module.css';

function Anchor({ url, text, component }) {
	return (
		<div className={styles.anchor}>
			<Link url={url} text={text} />
			{component}
		</div>
	);
}

export default Anchor;
