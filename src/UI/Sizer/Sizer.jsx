import styles from './styles.module.css';

function Sizer({ size }) {
	return <>{size ? <span className={styles.sizer}>{size}</span> : null}</>;
}

export default Sizer;
