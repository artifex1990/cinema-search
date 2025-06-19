import Img from '../../UI/Img/Img';
import Sizer from '../../UI/Sizer/Sizer';
import Anchor from '../Anchor/Anchor';
import styles from './styles.module.css';

function MenuHeaderAuthorizated() {
	return (
		<div className={styles.menu}>
			<Anchor url="#search" text="Поиск фильмов" />
			<Anchor url="#bookmarks" text="Мои фильмы">
				<Sizer size={0} />
			</Anchor>
			<Anchor url="#user" text="Пользователь">
				<Img src="./logo/user.svg" alt="user" />
			</Anchor>
			<Anchor url="#logout" text="Выйти" />
		</div>
	);
}

export default MenuHeaderAuthorizated;
