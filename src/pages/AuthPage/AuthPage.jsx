import BookmarkLink from '../../components/BookmarkLink/BookmarkLink';
import MenuHeaderAuthorizated from '../../components/MenuHeaderAuthorizated/MenuHeaderAuthorizated';
import AuthLayout from '../../layout/AuthLayout/AuthLayout';
import HeaderLayout from '../../layout/HeaderLayout/HeaderLayout';

function AuthPage() {
	return (
		<>
			<HeaderLayout>
				<BookmarkLink />
				<MenuHeaderAuthorizated />
			</HeaderLayout>
			<AuthLayout />
		</>
	);
}

export default AuthPage;
