import Img from '../../UI/Img/Img';
import Sizer from '../../UI/Sizer/Sizer';
import Anchor from '../Anchor/Anchor';
import styles from './styles.module.css';

function MenuHeaderAuthorizated() {
	return (
		<div className={styles.menu}>
			<Anchor url="#search" text="Поиск фильмов" />
			<Anchor
				url="#bookmarks"
				text="Мои фильмы"
				component={<Sizer size={0} />}
			/>
			<Anchor
				url="#user"
				text="Пользователь"
				component={<Img src="./logo/user.svg" alt="user" />}
			/>
			<Anchor url="#logout" text="Выйти" />
		</div>
	);
}

export default MenuHeaderAuthorizated;
