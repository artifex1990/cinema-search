import styles from './styles.module.css';

function HeaderLayout({ children }) {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>{children}</div>
		</header>
	);
}

export default HeaderLayout;
