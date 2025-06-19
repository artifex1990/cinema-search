function Header({ children, className }) {
	const classNames = className ? className : '';
	return <h1 className={classNames}>{children}</h1>;
}

export default Header;
