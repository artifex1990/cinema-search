import MainHeader from '../../components/MainHeader/MainHeader';
import LoginInput from '../../components/LoginInput/LoginInput';
import CommonButton from '../../components/CommonButton/CommonButton';
import styles from './styles.module.css';

function AuthLayout() {
	function handleSearch() {
		console.log('auth');
	}

	return (
		<div className={styles['auth-layout']}>
			<MainHeader>Вход</MainHeader>
			<LoginInput />
			<CommonButton className={styles.button} onClick={handleSearch}>
				Войти в профиль
			</CommonButton>
		</div>
	);
}

export default AuthLayout;
