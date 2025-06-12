import styles from './styles.module.css';

function Link({ url, text }) {
	return (
		<a className={styles.link} href={url}>
			{text}
		</a>
	);
}

export default Link;
