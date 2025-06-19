import Img from '../../UI/Img/Img';
import Sizer from '../../UI/Sizer/Sizer';
import Anchor from '../Anchor/Anchor';
import styles from './styles.module.css';

function MenuHeaderUnauthorizated() {
	return (
		<div className={styles.menu}>
			<Anchor url="#search" text="Поиск фильмов" />
			<Anchor url="#bookmarks" text="Мои фильмы">
				<Sizer size={2} />
			</Anchor>
			<Anchor url="#login" text="Войти">
				<Img src="./logo/login.svg" alt="login" />
			</Anchor>
		</div>
	);
}

export default MenuHeaderUnauthorizated;
