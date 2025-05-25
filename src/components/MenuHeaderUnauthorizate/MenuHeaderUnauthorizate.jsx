import Img from '../../UI/Img/Img';
import Sizer from '../../UI/Sizer/Sizer';
import Anchor from '../Anchor/Anchor';
import styles from './styles.module.css';

function MenuHeaderUnauthorizated() {
	return (
		<div className={styles.menu}>
			<Anchor url="#search" text="Поиск фильмов" />
			<Anchor
				url="#bookmarks"
				text="Мои фильмы"
				component={<Sizer size={2} />}
			/>
			<Anchor
				url="#login"
				text="Войти"
				component={<Img src="./logo/login.svg" alt="login" />}
			/>
		</div>
	);
}

export default MenuHeaderUnauthorizated;
