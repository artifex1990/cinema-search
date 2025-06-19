function Paragraph({ children, className }) {
	const classNames = className ? className : '';
	return <p className={classNames}>{children}</p>;
}

export default Paragraph;
