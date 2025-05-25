import styles from './styles.module.css';

function HeaderLayout({ children }) {
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>{children}</div>
		</header>
	);
}

export default HeaderLayout;
