import styles from './styles.module.css';

function Button({ children, className, onClick }) {
	const classNames = className
		? `${styles.button} ${className}`
		: styles.button;

	return (
		<button type="submit" className={classNames} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
