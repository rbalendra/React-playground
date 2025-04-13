const Header = (props) => {
	return (
		<header>
			<h1>Todo List</h1>
			<p>{props.user}</p>
		</header>
	);
};

export default Header;
