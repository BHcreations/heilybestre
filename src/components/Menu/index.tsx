import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<header>
			<div>
				<a>LOGO</a>
				<a>HEILY BESTRE</a>
			</div>
			<nav>
				<Link to={`/${process.env.REACT_APP_APP_NAME}/`}>HOME</Link>
				<Link to={`/${process.env.REACT_APP_APP_NAME}/about`}>ABOUT</Link>
				<Link to={`/${process.env.REACT_APP_APP_NAME}/`}>RESUME</Link>
			</nav>
		</header>
	);
};

export default Menu;
