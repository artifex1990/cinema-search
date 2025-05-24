import styles from './styles.module.css';

function MainHeader({ children }) {
	return <h1 className={styles.header}>{children}</h1>;
}

export default MainHeader;
