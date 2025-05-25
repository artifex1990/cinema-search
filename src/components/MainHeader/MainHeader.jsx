import styles from './styles.module.css';

function MainHeader({ children }) {
	return (
		<div className={styles.header}>
			<h1 className={styles.header__title}>{children}</h1>
		</div>
	);
}

export default MainHeader;
