import Button from '../../UI/Button/Button';
import styles from './styles.module.css';

function CommonButton({ onClick, children, className }) {
	const classNames = className
		? `${styles.button} ${className}`
		: styles.button;
	return (
		<Button type="submit" className={classNames} onClick={onClick}>
			{children}
		</Button>
	);
}

export default CommonButton;
